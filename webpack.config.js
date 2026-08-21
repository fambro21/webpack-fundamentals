const path = require("path");

// Create a config to build webpack
// npx webpack init

// or create a build from scratch
// touch webpack.config.js

module.exports = {
  // where to start looking at the code
  entry: "./src/index.js",

  // once compiled where to place the code
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
