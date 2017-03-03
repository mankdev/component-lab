"use strict";
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
function startServer(config, suite) {
    var webpackConfig = config.webpackConfig;
    var includes = config.include || [];
    webpackConfig.entry = {
        main: [
            ("webpack-dev-server/client?http://" + config.host + ":" + config.port + "/")
        ].concat(includes, [
            config.suites[suite]
        ])
    };
    webpackConfig.plugins = webpackConfig.plugins.filter(function (p) { return !(p instanceof HtmlWebpackPlugin); });
    var compiler = webpack(webpackConfig);
    compiler.apply(new ProgressPlugin({
        profile: true,
        colors: true
    }));
    compiler.apply(new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html')
    }));
    var serverConfig = {
        historyApiFallback: true,
        stats: {
            assets: true,
            colors: true,
            version: true,
            hash: true,
            timings: true,
            chunks: false,
            chunkModules: false
        },
        inline: true
    };
    var server = new WebpackDevServer(compiler, serverConfig);
    return new Promise(function (resolve, reject) {
        server.listen(config.port, "" + config.host, function (err, stats) {
            if (err) {
                console.error(err.stack || err);
                if (err.details) {
                    console.error(err.details);
                }
                reject(err.details);
            }
        });
    });
}
exports.startServer = startServer;
//# sourceMappingURL=server.js.map