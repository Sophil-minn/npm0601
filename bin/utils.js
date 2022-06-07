
// import pathExists from 'path-exists';
const  pathExists = require('path-exists');

export function exists(p) {
  console.log(pathExists, 'pathExists');
  return pathExists(p)
}