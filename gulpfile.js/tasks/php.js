import { watch } from 'gulp';
import paths from '../globals/path.js';
import browserHotReload from '../globals/browserHotReload.js';

function hotReload() {
  return watch(paths.source.php, browserHotReload);
}

export default { hotReload };