import { watch, src, dest, series } from 'gulp';
import paths from '../globals/path.js';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import notify from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps'; 
import browserHotReload from '../globals/browserHotReload.js';

const sass = gulpSass(dartSass);

function returnCleanCSSOptions(is_production = false) {
  let options = {
    compatibility: 'ie9',
    level: 2,
  }
  if (!is_production)
    options.format = 'beautify'
  return options;
}

function build() {
  const cleanCSSConfig = returnCleanCSSOptions();

  return src(paths.source.scss, { base: paths.sourceFolder })
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'expanded', update: true}).on('error', sass.logError))
    .pipe(cleanCSS(cleanCSSConfig))
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.buildFolder));
}

function buildForProduction() {
  const cleanCSSConfig = returnCleanCSSOptions(is_production => true);

  return src(paths.source.scss, { base: paths.sourceFolder })
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'expanded', update: true}).on('error', sass.logError))
    .pipe(cleanCSS(cleanCSSConfig))
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(autoprefixer({
			cascade: false
		}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.buildFolder));
}

function watchFiles() {
  return watch(paths.source.allScssComponents, series(build, browserHotReload));
}

export default { build, buildForProduction, watchFiles };