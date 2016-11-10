var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        vendor: [path.join(__dirname, "vendors.js")]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dll.[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "[name]-manifest.json"),
            name: "[name]",
            context: __dirname
        })
        /*new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()*/
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: ["node_modules"]
    }
};