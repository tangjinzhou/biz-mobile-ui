var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");
var nodeModulesPath = path.join(__dirname, 'node_modules');
var pxtorem = require('postcss-pxtorem');
const pxtoremOpts = {
    rootValue: 37.5,
    unitPrecision: 5,
    propWhiteList: [],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 2
};
var config = {
    entry: {
        app: [
            './App/index.js'
        ],
        vendor:['react','react-dom', 'classnames', 'lodash'],
        //dev: ['html-entities', 'react-transform-hmr','react-transform-catch-errors','redbox-react','react-proxy','webpack-hot-middleware/client']
    },
    resolveLoader: {
        root: nodeModulesPath
    },

    resolve: {
        root: path.resolve('App'),
        extensions: ['.js', '.jsx', '.less','.css'],
        modulesDirectories: ["node_modules"]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/dist/',
        jsonFunction: 'bizMobileDemo'
    },

    module: {
        loaders: [
            {
                test: /\.less$/,
                //loaders: ['style', 'css?sourceMap', 'postcss?sourceMap','less?sourceMap'],
                loader: ExtractTextPlugin.extract("css!postcss!less")
            },
            { test: /\.(jpg|png|jpeg|png|woff|woff2|eot|ttf|svg|gif)$/, loader: "url?limit=10000" },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {   test: /\.md$/,
                loader: "html!markdown"
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    postcss: function () {
        return [require('postcss-flexboxfixer'), require('autoprefixer'), pxtorem(pxtoremOpts)];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./dist/vendor-manifest.json")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            chunks: ['app', 'vendor']
        }),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'manifest.[chunkhash].js',
            chunks: ['vendor']
        }),*/
        new ExtractTextPlugin("[name].css", {
            allChunks: true,
            disable: false
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;
