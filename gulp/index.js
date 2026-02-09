'use strict';

import { series, parallel } from 'gulp';
import css from './tasks/scss.js';
import js from './tasks/js.js';
import images from './tasks/image.js';
import svgs from './tasks/svgIcons.js';
import fonts from './tasks/font.js';
import videos from './tasks/video.js';
import php from './tasks/php.js';
import html from './tasks/html.js';
import { cleanBuildFolder } from './tasks/clean.js';
import browserSynchronization from './tasks/browserSynchronization.js';

const buildStylesForProduction = css.buildForProduction;
buildStylesForProduction.displayName = 'styles:build:prod';
const buildStylesForDev = css.build;
buildStylesForDev.displayName = 'styles:build:dev';
const watchStyles = css.watchFiles;
watchStyles.displayName = 'styles:watch';
const processScriptsLibs = js.processLibs;
processScriptsLibs.displayName = 'scripts:processLibs';
const buildScriptsForProduction = js.buildForProduction;
buildScriptsForProduction.displayName = 'scripts:build:prod';
const buildScriptsForDev = js.build;
buildScriptsForDev.displayName = 'scripts:build:dev';
const watchScripts = js.watchFiles;
watchScripts.displayName = 'scripts:watch';
const watchScriptsLibs = js.watchLibs;
watchScripts.displayName = 'scripts:watchLibs';
const buildImages = images.processFiles;
buildImages.displayName = 'images:build';
const watchImages = images.watchFiles;
watchImages.displayName = 'images:watch';
const buildIcons = svgs.processFiles;
buildIcons.displayName = 'icons:build';
const watchIcons = svgs.watchFiles;
watchIcons.displayName = 'icons:watch';
const buildFonts = fonts.processFiles;
buildFonts.displayName = 'fonts:build';
const watchFonts = fonts.watchFiles;
watchFonts.displayName = 'fonts:watch';
const buildVideos = videos.processFiles;
buildVideos.displayName = 'videos:build';
const watchVideos = videos.watchFiles;
watchVideos.displayName = 'videos:watch';
const startHotReloadServer = browserSynchronization.LaunchReloadProxy;
startHotReloadServer.displayName = 'hotReload:launchServer';
const hotReloadPHP = php.hotReload;
hotReloadPHP.displayName = 'php:hotReload';
const hotReloadHTML = html.hotReload;
hotReloadHTML.displayName = 'php:hotReload';

const buildProcess =
    series(
        cleanBuildFolder,
        parallel(
            buildStylesForProduction,
            series(processScriptsLibs, buildScriptsForProduction),
            buildImages,
            buildIcons,
            buildFonts,
            buildVideos
        )
    );

const devProcess =
    series(
        cleanBuildFolder,
        startHotReloadServer,
        parallel(
            series(buildStylesForDev, watchStyles),
            series(buildScriptsForDev, watchScripts),
            series(processScriptsLibs, watchScriptsLibs),
            series(buildImages, watchImages),
            series(buildIcons, watchIcons),
            series(buildFonts, watchFonts),
            series(buildVideos, watchVideos),
            hotReloadPHP,
            hotReloadHTML
        )
    );

export { devProcess as dev, buildProcess as build };