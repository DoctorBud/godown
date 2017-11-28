package main

import (
	"bytes"
	"go/ast"
	"go/parser"
	"go/scanner"
	"go/token"
	"go/types"
	"github.com/gopherjs/gopherjs/compiler"
	"github.com/gopherjs/gopherjs/js"
	"honnef.co/go/js/xhr"
)

type Line map[string]string

func checkError(packageName string, pkgErr error) bool {
	if pkgErr != nil {
		println("## checkError " + packageName, pkgErr)
	}

	return pkgErr != nil
}

func checkErrorBool(lastError string, packageName string, pkgErr bool) bool {
	if pkgErr {
		println("## checkErrorBool " + packageName + " " + lastError)
	}

	return pkgErr
}

func dumpPackages(title string, packagePath string, packages map[string]*compiler.Archive) {
	// println("dumpPackages " + title + " " + packagePath)
	return
	buf := title + "(" + packagePath + ")"
	for key, value := range packages {
	    buf += "\n    " + key + ":" + value.Name
	}
	buf += "\n"
	println(buf)
}

func main() {
	// codeReady := make(chan struct{})
	packagesReady := make(chan bool)

	packages := make(map[string]*compiler.Archive)
	var pkgsToLoad map[string]struct{}
	importContext := &compiler.ImportContext{
		Packages: make(map[string]*types.Package),
		Import: func(path string) (*compiler.Archive, error) {
			pkg, found := packages[path]
			if found {
				dumpPackages("Imported", path, packages)
			} else {
				dumpPackages("Import??", path, packages)
				pkgsToLoad[path] = struct{}{}
				pkg = &compiler.Archive{}
			}
			return pkg, nil
		},
	}

	var loadPackagesAndMain func(string, string, string) string
	loadPackagesAndMain = func(packageName string, code string, base string) string {
		dumpPackages("loadPackagesAndMain", packageName, packages)

		fileSet := token.NewFileSet()
		lastError := ""

		// We only need to parse the source once
		file, err := parser.ParseFile(fileSet, "prog.go", code, parser.ParseComments)
		if err != nil {
			if list, ok := err.(scanner.ErrorList); ok {
				output := ""
				for _, entry := range list {
					output += entry.Error() + "\n"
				}
				println("loadPackagesAndMain1.5", output)
				return output
			}

			println("loadPackagesAndMain1.6", []Line{Line{"type": "err", "content": err.Error()}})

			return err.Error()
		}

		//
		// OK, we're going to iteratively try to compile the source, and
		// this will either succeed or will fail. If it fails, it may be
		// because some of the dependencies weren't loaded. We'll anticipate
		// this and initiate the loading of these dependencies.
		//

		var allPkgs []*compiler.Archive
		firstTime := true
		for {
			pkgsToLoad = make(map[string]struct{})

			mainPkg, err := compiler.Compile(packageName, []*ast.File{file}, fileSet, importContext, false)
			dumpPackages("compiler.Compile", packageName, packages)

			if list, ok := err.(compiler.ErrorList); ok {
				output := ""
				for _, entry := range list {
					output += entry.Error() + "\n"
				}
				lastError = output
			}

			if mainPkg != nil {
				packages[packageName] = mainPkg
				dumpPackages("Added main...", packageName, packages)
			}

			if !firstTime {
				before := len(pkgsToLoad)

				dumpPackages("before ImportDependenciesA", packageName, packages)
				pkg, pkgFound := packages[packageName]
				if checkErrorBool(lastError, packageName, !pkgFound) {
					println("breaking")
					break
				}
				allPkgs, _ = compiler.ImportDependencies(pkg, importContext.Import)
				after := len(pkgsToLoad)
				if before == after {
					break
				}
			}
			pkgsReceived := 0

			for path := range pkgsToLoad {
				codePath := base + "pkg/"+path+".a.js"

				req := xhr.NewRequest("GET", codePath)
				req.ResponseType = xhr.ArrayBuffer
				go func(path string) {
					err := req.Send(nil)
					if err != nil || req.Status != 200 {
						println("     load error", path, req.Status)
						return
					}

					data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
					packages[path], err = compiler.ReadArchive(path+".a", path, bytes.NewReader(data), importContext.Packages)
					if err == nil {
						dumpPackages("Loading " + codePath + " SUCCESS", path, packages)
					} else {
						dumpPackages("Loading " + codePath + " ERROR " + err.Error(), path, packages)
						return
					}
					pkgsReceived++
					if pkgsReceived == len(pkgsToLoad) {
						packagesReady <- true
					}
				}(path)
			}
			if len(pkgsToLoad) > 0 {
				<-packagesReady
			}
			firstTime = false
		}

		dumpPackages("before ImportDependencies1", packageName, packages)
		pkg, pkgFound := packages[packageName]
		if checkErrorBool(lastError, packageName, !pkgFound) {
			return "ERROR: " + lastError
		}
		allPkgs, _ = compiler.ImportDependencies(pkg, importContext.Import)

		var transformedCode = ""

		if (packageName == "main") {
			jsCode := bytes.NewBuffer(nil)
			jsCode.WriteString("try{\n")
			compiler.WriteProgramCode(allPkgs, &compiler.SourceMapFilter{Writer: jsCode})
			jsCode.WriteString("} catch (err) {\ngoPanicHandler(err.message);\n}\n")
			transformedCode = jsCode.String()
		} else {
			transformedCode = "console.log('package " + packageName + "');"
		}

		return transformedCode
	}

	js.Global.Set("goPanicHandler", js.InternalObject(func(msg string) {
		println("goPanicHandler", "Panic:", msg);
	}))

	js.Global.Set("godownTranslate", js.InternalObject(func(packageName string, code string, done func(string)) {
	  go func() {
	  	base := js.Global.Get("godownBase").String()
		transformedCode := loadPackagesAndMain(packageName, code, base)
		// println("godownTranslate", packageName, code[:20], base, transformedCode[:20])
		done(transformedCode)
	  }()
	}))
}

