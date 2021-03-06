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
  .option('-f, --force', '是否强制克隆')
  .action((source, destination, cmdObj) => {
    console.log(source, 'do clone', destination, cmdObj.force, 999, cmdObj)
  })

// addCommand 注册命令

console.log(program.opts(), 'program.opts()')

const service = new commander.Command('service');
service
  .command('start [port]')
  .description('start service at some port')
  .action(
    (port, obj) => {
      console.log('do servie start', port, obj);
    }
  );
  service
  .command('stop')
  .description('stop service')
  .action(() => {
    console.log('stop service');
  });

program.addCommand(service);

program
  .command('install [name]', 'install package', {
    // executableFile: 'once-test',
    hidden: true,
    // isDefault: true
  })
  .alias('i')

program
  .arguments('<cmd> [options]')
  .description('test command', {
    cmd: 'command to run ',
    options: 'options for command'
  })
  .action((cmd, options) => {
    console.log(cmd, options)
  })


  // 高级定制1： 自定义help信息
// program.outputHelp(); 方式一 打印帮助信息
// program.helpInformation() 方式二打印帮助信息
console.log(program.helpInformation(), 'program.helpInformation()');

// 策略一
program.helpInformation = function() {
  return '';
}
//  策略二
program.on('--help', function() {
  console.log('自定义帮助信息 ');
});
// console.log(program.outputHelp(), 'program.outputHelp()');

// 高级定制2 实现debug模式
program.on('option:debug', function() {
  console.log('debug', program.opts().debug);
  if(program.opts().debug) {
    process.env.LOG_LEVEL = 'verbose'
  }
  console.log( process.env.LOG_LEVEL, ' process.env.LOG_LEVEL');
});

// 高级定制3: 对未知命令监听
program.on('command:*', function(obj){
  console.log(obj);
  console.error('未知的命令：' + obj[0])
  const avaiableCommands = program.commands.map(cmd => cmd.name());
  console.log(avaiableCommands);
  console.log('可用命令：' + avaiableCommands.join(','));
});





program.parse(process.argv)