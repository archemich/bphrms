const gulp = require('gulp'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload

var path = './';

reload_src = [
    path + '*.html',
    path + '*.php',
    path + 'css/**/*.css',
    path + 'js/**/*.js'
]

// var d = path.dir
var config = {
    server: {
        baseDir: './',
    },
    files: reload_src,
    //
    // reloadDelay: 0,
    // reloadDebounce: 0,
    injectChanges: true,
    // proxy: "http://my.lc/"
}


gulp.task('serve', function () {
    browserSync(config);
})