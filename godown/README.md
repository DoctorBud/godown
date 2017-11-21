# GopherJS GoDown

Adapts the GopherJS compiler to be more easily embeddable within a browser environment such as Smartdown. Based upon the [GopherJS Playground](https://github.com/gopherjs/gopherjs.github.io), although all UI (especially the Angular usage) has been removed and only the translation core has been exposed.

## Demo/Test

The `index.html` file is an example that demonstrates compilation/translation of Go to Javascript, followed by execution. The `index.html` test must be served via an HTTP server.

I've found [http-server](https://github.com/indexzero/http-server) to be effective and practical for my development needs. For example, install via:

```bash
npm install -g http-server
```

and then exercise the demo/test with:

```bash
http-server -c-1 .
```

## Development

To generate the `godown.js` library from the `godown.go` source package, use:

```bash
> gopherjs build
```

To ensure that your `pkg/` directory has up-to-date dependencies, use:

```bash
> update.sh
```

