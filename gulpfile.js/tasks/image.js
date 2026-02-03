import { watch, src, dest, series } from 'gulp';
import paths from '../globals/path.js';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import browserHotReload from '../globals/browserHotReload.js';

function processFiles() {
  return src(paths.source.images, { base: paths.sourceFolder, encoding: false })
    .pipe(newer(paths.buildFolder))
    .pipe(webp({quality: 100, method: 6, lossless: 100}))
    .pipe(dest(paths.buildFolder));
}

function watchFiles() {
  return watch(paths.source.images, series(processFiles, browserHotReload));
}

export default { processFiles, watchFiles };