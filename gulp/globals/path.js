const configName = process.env.BUILD_CONFIG || 'default';
const { default: config } = await import(`../config/${configName}.config.js`);

const paths = {
  source: {
    scss: `${config.sourceFolder}/**/scss/*.scss`,
    allScssComponents: `${config.sourceFolder}/**/scss/**/*.scss`,
    js: `${config.sourceFolder}'/{js,**/js}/*.js'`,
    jsEsBuild: `${config.sourceFolder}/js/`,
    jsLibraries: `${config.sourceFolder}/**/js/libs/*.*`,
    images: `${config.sourceFolder}/**/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svgs: `${config.sourceFolder}/**/img/**/*.svg`,
    fonts: `${config.sourceFolder}/**/fonts/**/*.*`,
    video: `${config.sourceFolder}/**/videos/**/*.*`,
    php: '*.php',
    html: `*.{html, htm}`
  },
  browserSync: {
    ToWatch: {
      html: '**/*.html',
      php: '**/*.php',
      assets: `${config.buildFolder}/**/*.*`
    }
  },
  sourceFolder: config.sourceFolder,
  buildFolder: config.buildFolder
}

export default paths;