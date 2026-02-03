import browserSync from 'browser-sync'; 

export default function browserHotReload(done) {
  browserSync.reload();
  done();
}