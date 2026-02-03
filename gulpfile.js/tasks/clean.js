import paths from '../globals/path.js';
import { deleteAsync } from 'del';

function cleanBuildFolder() {
  return deleteAsync([`${paths.buildFolder}/**`, `!${paths.buildFolder}`]);
}

export { cleanBuildFolder };
