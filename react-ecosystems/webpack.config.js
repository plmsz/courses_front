const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    entry: "./src/index.js",
    devtool: "source-map",
    mode: isDevelopment ? "development" : "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html",
        hash: true, // cache busting
        filename: "../dist/index.html"
    })],
    devServer: {
        hot: true,
    },
};