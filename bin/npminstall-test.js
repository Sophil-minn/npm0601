const npminstall = require('npminstall');
const path = require('path');
const userHome = require('user-home');

npminstall({
  root: path.resolve(userHome, '.once-test'), //模块 路径
  storeDir: path.resolve(userHome, '.once-test', 'node_modules'),
  registry: 'https://registry.npmjs.org',
  pkgs: [
    { name: 'foo', version: '~1.0.0' },
  ],
});