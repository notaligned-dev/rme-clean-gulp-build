import { watch, src, dest, series } from 'gulp';
import paths from '../globals/path.js';
import newer from 'gulp-newer';
import browserHotReload from '../globals/browserHotReload.js';

function processFiles() {
  return src(paths.source.fonts, { base: paths.sourceFolder, encoding: false, removeBOM: false })
    .pipe(newer(paths.buildFolder))
    .pipe(dest(paths.buildFolder));
}

function watchFiles() {
  return watch(paths.source.fonts, series(processFiles, browserHotReload));
}

export default { processFiles, watchFiles };