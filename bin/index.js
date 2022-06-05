#!/usr/bin/env node

const yargs = require('yargs/yargs');

const { hideBin } = require('yargs/helpers');

const arg = hideBin(process.argv);


yargs(arg).argv;