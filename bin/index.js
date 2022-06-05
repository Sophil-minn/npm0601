#!/usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json');

// 获取commander的单例
// const { program } = commander;

// 手动实例化Command实例
const program = new commander.Command();

program
  .version(pkg.version)
  .parse(process.argv)