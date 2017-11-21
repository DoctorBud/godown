### Integrating GopherJS with Smartdown in two beers

- https://github.com/gopherjs/gopherjs
- https://github.com/gopherjs/gopherjs.github.io

---

#### Domsub creates DOM and signals channel on Click

```go/playable/autoplay
package domsub

import (
  "honnef.co/go/js/dom"
)

func Domsub(ch chan int) {
  println("after Alert")

  d := dom.GetWindow().Document()

  foo := d.GetElementByID("div_playable_1").(*dom.HTMLDivElement)
  foo.SetInnerHTML("<h1>Click Me</h1>")
  foo.AddEventListener("click", false, func(event dom.Event) {
    div := d.CreateElement("div").(*dom.HTMLDivElement)
    div.Style().SetProperty("color", "red", "")
    div.SetTextContent("I am new div")
    foo.ParentNode().InsertBefore(div, foo)
    ch <- 1
  })
}
```

#### Main program invokes Domsub and waits on channel

```go/playable/autoplay
package main

import (
  "domsub"
)

var ch chan int

func sub() {
  ch = make(chan int, 5)
  domsub.Domsub(ch)
  v1 := <- ch
  println("clicked", v1)
}
func main() {
  sub()
  println("All Done")
}

```

### Define a channel

```gox/playable
package sub

var SubName = "Hello from sub"
var SubChan = make(chan int, 2)

func Sub() {
  println("Sub setting SubChan")
  SubChan <- 1
}
```


```gox/playable
package main

import (
  "sub"
)

func main() {
  println("main before goRoutine")
  println("goRoutine before SubChan")
  sub.Sub()
  v1 := <- sub.SubChan
  println("goRoutine after SubChan", v1)
  sub.SubChan <- 2
  v2 := <- sub.SubChan
  println("main complete", v2)
}
```


