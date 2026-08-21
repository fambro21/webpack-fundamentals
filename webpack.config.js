const path = require("path");

// Create a config to build webpack
// npx webpack init

// or create a build from scratch
// touch webpack.config.js

module.exports = {
  // where to start looking at the code
  // change string to array to server multiple files
  entry: ["./src/index.js", "./src/home.js"],

  // once compiled where to place the code
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  // Configure Webpack Dev Server
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    static: "./dist",
  },
};
