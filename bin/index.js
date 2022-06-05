#!/usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json');

// 获取commander的单例
// const { program } = commander;

// 手动实例化Command实例
const program = new commander.Command();

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug', '是否开启调试模式', false)
  .option('-e, --envName <envName>', '获取环境变量名称')
 
 
// command 注册命令
const clone = program.command('clone <source> [destination]');
clone
  .description('clone a repository')
  .option('-f, -force', '是否强制克隆')
  .action((source, destination, cmdObj) => {
    console.log(source, 'do clone', destination, cmdObj.Force)
  });
program.parse(process.argv)
// addCommand 注册命令