import path from 'path';
import { exists } from './utils';

console.log(path.resolve('.'));
const exist = exists(path.resolve('.')).then(res => {
  console.log(res, 'exist');
});

console.log(exist);