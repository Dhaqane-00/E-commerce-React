// webpack.config.js 
const { BuilderDevToolsPlugin } = require("@builder.io/dev-tools/webpack");

// ...

// ...
// This is usually where the 
// HtmlWebpackPlugin or InlineChunkHtmlPlugin are
  plugins: [
    // ...
    new BuilderDevToolsPlugin(),
  ]
// ...