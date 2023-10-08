#!/usr/bin/env node

const { Command, Option } = require("commander");
const createCommands = require("./lib/core/create");
const { initHelpConfig } = require("./lib/core/help");

const program = new Command();

program.version(require("./package.json").version);
program.version(require("./package.json").version, "-v", "--version");

initHelpConfig(program);
createCommands(program);

program.parse();
