#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var server_1 = require('./server');
var Liftoff = require('liftoff');
var minimist = require('minimist');
var interpret = require('interpret');
var args = minimist(process.argv.slice(2));
var ComponentLab = new Liftoff({
    name: 'run-lab',
    extensions: interpret.jsVariants,
    configName: 'component-lab.config',
    configFiles: {
        'component-lab.config': {
            up: {
                path: '.',
                findUp: true
            }
        }
    }
});
var log = function (message) { return console.log(message); };
ComponentLab.on('require', function (name) {
    log("Requiring external module " + chalk.magenta(name));
});
ComponentLab.on('requireFail', function (name) {
    log(chalk.red('Failed to require external module') + " " + chalk.magenta(name));
});
ComponentLab.launch({
    cwd: args.cwd,
    require: args.require,
    configPath: args.config,
    completion: args.completion
}, launch);
function launch(env) {
    var suite = args['_'][0];
    if (!suite) {
        log(chalk.red('No suite provided'));
        process.exit(1);
    }
    if (!env.configPath) {
        log(chalk.red('No local component-lab config file found'));
        process.exit(1);
    }
    var config = require(env.configPath);
    server_1.startServer(config, suite);
}
//# sourceMappingURL=cli.js.map