
import pathExists from 'path-exists';

export function exists(p) {
  console.log(pathExists, 'pathExists');
  // return pathExists.sync(p)
}