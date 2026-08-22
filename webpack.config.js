const path = require("path");

// Html Webpack Plugin automatically creates your HTML file and injects
// your Javascript (and CSS) files into it.

// Without HtmlWebpackPlugin: You have to manually add your <script> and <link>
// tags every time Webpack changes the filenames.
const HtmlWebpackPlugin = require("html-webpack-plugin");

// CopyWebpackPlugin is used to copy files or folders from your source project
// into your Webpack output (dist) folder without changing them.
const CopyPlugin = require("copy-webpack-plugin");

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
        test: /\.scss$/,
        exclude: /node_modules/,
        // last to first
        // sass-loader first
        // css-loader second
        // style-loader third
        // css-loader: let Webpack understand CSS files
        // style-loader: takes that CSS and puts it onto the web page
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CopyPlugin({
      patterns: [{ from: "./src/images", to: "images" }],
    }),
  ],
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
