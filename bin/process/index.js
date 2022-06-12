const cp = require('child_process');
const path = require('path');

cp.exec('ls  -al|grep node_modules', function(err, stdout, stderr){
  console.log(err);
  console.log(stdout);
  console.log(stderr);
});

cp.exec(path.resolve(__dirname, 'test.shell'), {
  
  cwd: path.resolve('../../'),
  // cwd: process.cwd(),
}, function(err, stdout, stderr){
  console.log('cwd')
  console.log(err);
  console.log(stdout);
  console.log(stderr);
  console.log('cwd')
});
// 
// cp.execFile('ls', ['-al'], function(err, stdout, stderr){
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
// });

cp.execFile(path.resolve(__dirname, 'test.shell'), ['-al',  'cc'], function(err, stdout, stderr){
  console.log(err);
  console.log(stdout);
  console.log(stderr);
});


// console.log(cp, 'cp');