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
