import config from '../config.js';
import browserSync from 'browser-sync';
import paths from '../globals/path.js';

function LaunchReloadProxy (done) {
  let browserSyncConfig = {
    open: false,
    notify: false,
    reloadOnRestart: true,
    injectChanges: false,
    port: 3000
  }
  if (config.isProxy) 
    browserSyncConfig.proxy = config.localWebsiteURL;
  else 
  {
    browserSyncConfig.server = {
      baseDir: "./"
    };
    browserSyncConfig.watchOptions = {
      ignored: [
        "node_modules/",
        "gulpfile.js/",
        "./*.json",
        "*.txt"
      ]
    };
    browserSyncConfig.files = `${paths.browserSync.ToWatch.html}, ${paths.browserSync.ToWatch.php}, ${paths.browserSync.ToWatch.assets}`;
  }
  browserSync.init(browserSyncConfig);
  done();
};

export default { LaunchReloadProxy };