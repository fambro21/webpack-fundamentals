const path = require("path");

// Create a config to build webpack
// npx webpack init

// or create a build from scratch
// touch webpack.config.js

module.exports = {
  // where to start looking at the code
  // change string to array to server multiple files
  entry: {
    index: "./src/index",
    home: "./src/home",
  },

  // once compiled where to place the code
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // Using Typescript loader
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  // Looks to resolve the extensions on files
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  // Configure Webpack Dev Server
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    static: "./dist",
  },
};
