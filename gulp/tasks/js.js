import { watch, src, dest, series } from 'gulp';
import paths from '../globals/path.js';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserHotReload from '../globals/browserHotReload.js'
import * as esbuild from 'esbuild';
import babelPlugin from 'esbuild-plugin-babel';
import fg from 'fast-glob';

function getJsEntryPoints() {
  return fg.sync(paths.source.js);
}

let jsContext;

const dev_config = {
  entryPoints: getJsEntryPoints(),
  bundle: true,
  outbase: paths.sourceFolder,
  outdir: paths.buildFolder + "/",
  outExtension: { '.js': '.min.js' },
  plugins: [babelPlugin({ filter: /\.[jt]sx?$/ })],
  logLevel: 'info'
}

const production_config = {
  entryPoints: getJsEntryPoints(),
  bundle: true,
  outbase: paths.sourceFolder,
  outdir: paths.buildFolder + "/",
  outExtension: { '.js': '.min.js' },
  minify: true,
  plugins: [babelPlugin({ filter: /\.[jt]sx?$/ })],
  logLevel: 'info'
}

async function build() {
  await esbuild.build(dev_config).catch(() => process.exit(1));
}

function buildForProduction() {
  return esbuild.build(production_config).catch(() => process.exit(1));
}

function processLibs() {
  return src(paths.source.jsLibraries, { base: paths.sourceFolder })
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(dest(paths.buildFolder));
}

export async function watchFiles() {
  jsContext = await esbuild.context(dev_config);
  await jsContext.watch();
}

export function watchLibs() {
  return watch(paths.source.jsLibraries, processLibs);
}

export default { build, buildForProduction, processLibs, watchFiles, watchLibs };