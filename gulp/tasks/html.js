import { watch } from 'gulp';
import paths from '../globals/path.js';
import browserHotReload from '../globals/browserHotReload.js';

function hotReload() {
  return watch(paths.source.html, browserHotReload);
}

export default { hotReload };