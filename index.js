#!/usr/bin/env node

const { Command, Option } = require('commander');
const createCommands = require('./lib/core/create');
const projectCommands = require('./lib/core/project');
const { initHelpConfig } = require('./lib/core/help');

const program = new Command();

program.version(require('./package.json').version);
program.version(require('./package.json').version, '-v', '--version');

initHelpConfig(program);
createCommands(program);
projectCommands(program);

program.parse();
