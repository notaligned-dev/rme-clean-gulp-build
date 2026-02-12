import { watch, src, dest, series } from 'gulp';
import paths from '../globals/path.js';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import gulpIf from 'gulp-if';
import browserHotReload from '../globals/browserHotReload.js';
const configName = process.env.BUILD_CONFIG || 'default';
const { default: config } = await import(`../config/${configName}.config.js`);

function processFiles() {
  return src(paths.source.images, { base: paths.sourceFolder, encoding: false })
    .pipe(newer(paths.buildFolder))
    .pipe(gulpIf(config.isWebpConvertion, webp({quality: 100, method: 6, lossless: 100})))
    .pipe(dest(paths.buildFolder));
}

function watchFiles() {
  return watch(paths.source.images, series(processFiles, browserHotReload));
}

export default { processFiles, watchFiles };