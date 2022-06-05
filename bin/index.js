#!/usr/bin/env node

const yargs = require('yargs/yargs');

const { hideBin } = require('yargs/helpers');

const arg = hideBin(process.argv);
const cli = yargs(arg);
const dedent = require('dedent');

cli
.usage('Usage: once-test [command] <options>')
.demandCommand(1, 'A command is required. Pass --help to see all available commands and options')
.alias("h", "help")
.alias("m", "version")
.alias("e", "debug")
.strict()
.wrap(cli.terminalWidth())
.epilogue(dedent`  1111

    23324

    534253
      9080
`)
.options(
  {
    debug: {
      type: 'boolean',
      describe: "Boostrap debug mode",
      alias: 'd'
    }
  }
)
.option('registry', {
  type: 'string',
  describe: 'Define global registry',
  alias: 'r'
})
.group(['debug'], 'Dev options')
.group(['registry'], 'Extra options')
.argv;