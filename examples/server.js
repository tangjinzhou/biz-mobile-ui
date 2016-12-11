/// <reference path="typings/index.d.ts"/>

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/getDoc',upload.array(), function (req, res) {
    if(req.body.name && req.body.name !== 'undefined') {
        var docFilePath = path.join(__dirname, 'node_modules', '@bizfe', 'biz-mobile-ui', 'src', req.body.name, 'index.md');
        var demoFilePath = path.join(__dirname, 'App', 'Demo', req.body.name, 'index.js');
        var docFile = fs.readFileSync(docFilePath, "utf8");
        var demoFile = fs.readFileSync(demoFilePath, "utf8");
        res.send({doc: docFile + '\n### demo代码\n ```javascript\n' + demoFile + '\n```'});
    } else {
        var docFilePath = path.join(__dirname,'App', 'start.md');
        var docFile = fs.readFileSync(docFilePath, "utf8");
        res.send({doc: docFile});
    }

});

app.get('/dist/*', function (req, res) {
    res.sendFile(path.join(__dirname, req.url));
});

app.get('/*.action', function (req, res) {
    res.sendFile(path.join(__dirname, 'mock',req.url.replace('.action','.json')));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, req.url));
});

app.listen(3332, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3332');
});
