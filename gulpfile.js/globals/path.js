import Config from '../config.js';

const paths = {
  source: {
    scss: `${Config.sourceFolder}/*/scss/*.scss`,
    allScssComponents: `${Config.sourceFolder}/*/scss/**/*.scss`,
    js: `${Config.sourceFolder}'/{js,*/js}/*.js'`,
    jsEsBuild: `${Config.sourceFolder}/js/`,
    jsLibraries: `${Config.sourceFolder}/*/js/libs/*.*`,
    images: `${Config.sourceFolder}/*/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svgs: `${Config.sourceFolder}/*/img/**/*.svg`,
    fonts: `${Config.sourceFolder}/*/fonts/**/*.*`,
    video: `${Config.sourceFolder}/*/videos/**/*.*`,
    php: '*.php',
    html: `*.{html, htm}`
  },
  destination: {
    jsEsBuild: `${Config.buildFolder}/js/`,
    jsEsBuildTheme: `${Config.buildFolder}/theme/js/`
  },
  sourceFolder: Config.sourceFolder,
  buildFolder: Config.buildFolder
}

export default paths;