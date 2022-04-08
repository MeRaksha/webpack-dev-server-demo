# webpack-dev-server-demo

### _Topics covered in this demo._

-  mode configuration option in webpack
-  Using source maps
-  Using webpack-dev-server

## To run the demo:

- npm install
- npm run build
- npm serve

### mode Configuration

Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.

<code>string = 'production': 'none' | 'development' | 'production'</code>

We can either configure in webpack config file like :

```sh
  mode: 'development',
```

or pass it as a CLI argument:

```sh
webpack --mode=development
```

### Using source maps

A source map provides a way of mapping code within a compressed file back to it’s original position in a source file.
<code>devtool</code> option controls if and how source maps are generated.
We can choose a style of source mapping to enhance the debugging process. These values differ in the build and rebuild speeds and . 


```sh
  mode: 'eval-source-map',
```

### Using webpack-dev-server
The webpack-dev-server provides a web server as well as live reloading. Adding the below configuration in the webpack config tells webpack-dev-server to serve the files from the dist directory on localhost:8080
```sh
  devServer: {
    static: './dist',
  }
```

