const path = require("path");

// Html Webpack Plugin automatically creates your HTML file and injects
// your Javascript (and CSS) files into it.

// Without HtmlWebpackPlugin: You have to manually add your <script> and <link>
// tags every time Webpack changes the filenames.
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Create a config to build webpack
// npx webpack init

// or create a build from scratch
// touch webpack.config.js

module.exports = {
  // where to start looking at the code
  // change string to array to server multiple files
  entry: ["./src/index", "./src/home"],

  // once compiled where to place the code
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // Using Typescript loader
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // last to first
        // css-loader first
        // style-loader second
        // css-loader: let Webpack understand CSS files
        // style-loader: takes that CSS and puts it onto the web page
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  // Looks to resolve the extensions on files
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  // Configure Webpack Dev Server
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    // Refresh the build for live reload
    watchFiles: ["src/**/*", "index.html"],
    static: "./dist",
  },
};
