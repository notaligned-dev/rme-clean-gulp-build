import { watch, src, dest, series } from 'gulp';
import paths from '../globals/path.js';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserHotReload from '../globals/browserHotReload.js'
import * as esbuild from 'esbuild';
import babelPlugin from 'esbuild-plugin-babel';
import fg from 'fast-glob';

function getJsEntryPoints() {
  const lele = fg.sync('src/assets/{js,**/js}/*.js');
  console.log(lele);
  return lele;
}

function build() {
  return esbuild.build({
    entryPoints: getJsEntryPoints(),
    bundle: true,
    outbase: paths.sourceFolder,
    outdir: paths.buildFolder + "/",
    outExtension: { '.js': '.min.js' },
    plugins: [babelPlugin({ filter: /\.[jt]sx?$/ })],
    logLevel: 'info'
  }).catch(() => process.exit(1));
}

function buildForProduction() {
  return esbuild.build({
    entryPoints: getJsEntryPoints(),
    bundle: true,
    outbase: paths.sourceFolder,
    outdir: paths.buildFolder + "/",
    outExtension: { '.js': '.min.js' },
    minify: true,
    plugins: [babelPlugin({ filter: /\.[jt]sx?$/ })],
    logLevel: 'info'
  }).catch(() => process.exit(1));
}

function processLibs() {
  return src(paths.source.jsLibraries)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(dest(paths.buildFolder));
}

function watchFiles() {
  return watch(paths.source.js, series(build, browserHotReload));
}

export default { build, buildForProduction, processLibs, watchFiles };