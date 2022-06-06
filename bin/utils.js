
import pathExistsSync from 'path-exists';

export function exists(p) {
  console.log(pathExistsSync, 'pathExists');
  return pathExistsSync(p)
}