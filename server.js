var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    //contentBase: __dirname,
    lazy: false,
    watchOptions: {
        aggregateTimeout: 30,
        poll: true
    },
    stats: {
        colors: true
    },
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/src/util/viewport.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'util', 'viewport.js'));
});

app.get('/dist/dll.vendor.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'dll.vendor.js'));
});

app.get('/*.action', function (req, res) {
    res.sendFile(path.join(__dirname, 'mock',req.url.replace('.action','.json')));
})

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});

/*var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    hot: true,
    //inline: true,
    // display no info to console (only warnings and errors)
    noInfo: false,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
        // With console colors
        colors: true
    }
});

server.listen(3333, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Listening at http://localhost:3333. Please wait, I'm building things for you...");
});*/

