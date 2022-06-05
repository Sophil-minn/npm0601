#!/usr/bin/env node

const yargs = require('yargs/yargs');

const { hideBin } = require('yargs/helpers');

const arg = hideBin(process.argv);

const cli = yargs(arg);
const argv = process.argv.slice(2)
const dedent = require('dedent');
const pkg = require('../package.json');

const context = {
  onceTest: pkg.version,
  moreArgs: '2022 520'
}

cli
.usage('Usage: once-test [command] <options>')
.demandCommand(1, 'A command is required. Pass --help to see all available commands and options')
.alias("h", "help")
.alias("m", "version")
.alias("e", "debug")
.strict()
.fail((err, msg) => {
  console.log(err, 'err');
  console.log(msg, 'msg');
})
.recommendCommands()
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
.command('init [name]', 'Do init a project', (yargs) => {
  yargs.option(
    "name", {
      type: 'string', 
      describe: 'Name of Project'
    }
  )

}, (argv) => {
  console.log(argv)
} )
.command({
  command: 'List',
  aliases: ['ls', 'la', 'll'],
  describe: 'List Local packages',
  builder: (yargs) => {

  },
  handler: (argv) => {
    console.log(argv);
  }
 })
.parse(argv, context)