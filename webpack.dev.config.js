// This config is extented from webpack.config.js. We use it for development with webpack-dev-server and autoreload/refresh


var webpack = require('webpack');
//var Config = require('webpack-config').Config;
var path = require("path");
var nodeModulesPath = path.join(__dirname, 'node_modules');

var devConfigExtension = {
    cache: true,
    entry: {
        app: [
            'webpack-hot-middleware/client',
            /*'webpack-dev-server/client?http://localhost:3333',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',*/
            './app.tsx'
        ],
       // hotReload: ['webpack-hot-middleware/client'],
        //dllVendor: './dist/dll.vendor.js'
        //vendor:['react','react-dom', 'classnames', 'lodash'],
        //dev: ['html-entities', 'react-transform-hmr','react-transform-catch-errors','redbox-react','react-proxy','webpack-hot-middleware/client']
    },
    resolveLoader: {
        root: nodeModulesPath
    },
    
    resolve: {
        root: path.resolve('src'),
        extensions: ['', '.tsx', '.ts', '.js', '.less','.css'],
        modulesDirectories: ["node_modules"]
        /*alias: {
            'react$': path.join(nodeModulesPath, 'react','dist', 'react.min.js'),
            'react-dom': path.join(nodeModulesPath, 'react-dom','dist', 'react-dom.min.js')
        }*/
    },
    output: {
        filename: '[name].js',
        publicPath: "/dist"
    },

    // more options here: http://webpack.github.io/docs/configuration.html#devtool
    devtool: 'eval-source-map',
    //profile: true,
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['babel', 'ts?configFileName=tsconfig.json'],
                exclude : /node_modules/
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css?sourceMap', 'postcss?sourceMap','less?sourceMap'],
                //loader: ExtractTextPlugin.extract("css?sourceMap!postcss?sourceMap!less?sourceMap"),
                include: path.join(__dirname, "src")
            },
            { test: /\.(jpg|png|jpg|png|woff|woff2|eot|ttf|svg|gif)$/, loader: "url?name=[name].[ext]" }
        ]
    },
    postcss: function () {
        return [require('postcss-flexboxfixer'), require('autoprefixer')];
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./dist/vendor-manifest.json")
        }),

        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'hotReload',
            filename: 'hotReload.js',
            chunks: ['app']
        }),*/
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'dllVendor',
            minChunks: Infinity,
        }),*/
        /*new ExtractTextPlugin("[name].css", {
            allChunks: true,
            disable: false
        }),*/
        // Used for hot-reload
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    tslint: {
        // Rules are in tslint.json
        emitErrors: true, // false = WARNING for webpack, true = ERROR for webpack
        formattersDirectory: path.join(nodeModulesPath, 'tslint-loader', 'formatters')
    }
};

module.exports = devConfigExtension;
