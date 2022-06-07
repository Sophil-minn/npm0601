import path from 'path';
// import { exists } from './utils';
const  pathExists = require('path-exists');
// import pathExists from 'path-exists';


console.log(pathExists, 'pathExists');
console.log(path.resolve('.'));
// const exist = exists(path.resolve('.')).then(res => {
//   console.log(res, 'exist');
// });
// console.log(exists);
// console.log(exist);

// (
//   async function() {
//     await new Promise(resolve => setTimeout(resolve, 2000))
//     console.log('ok');
//   }
// )();