const gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant = require('imagemin-pngquant')

let pluginSrc = {
    html: ['*.html', "**/*.php"],

    js: [
        'js/*.js',
        '!js/*.min.js',
        '!js/vendor',
    ],
    css: [
        '!css/vendor',
        '!css/vendor',
        '!bulma/',
        '!bulma',
        'less/**/*.less',
    ],
    cssMaps: [
        'css/maps/*',
    ],
    svg: [
        'images/**/*.svg',
    ],
    images: [
        'images/**/*.png',
        'images/**/*.jpeg',
        'images/**/*.jpg',
    ],
}

// gulp.task('js', function () {
//     return gulp.src(pluginSrc.js)
//         .pipe(plugins.babel())
//         .pipe(plugins.plumber())
//         .pipe(plugins.uglify({
//             compress: true,
//             preserveComments: 'all',
//         }))
//         .pipe(plugins.rename({
//             extname: '.js',
//             suffix: '.min',
//         }))
//         .pipe(gulp.dest(function (file) {
//             return file.base
//         }))
//         .pipe(plugins.notify({message: 'Скрипты собрались'}))
// })

gulp.task('css', function () {
    return gulp.src(pluginSrc.css)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer(['ios_saf >= 6', 'last 3 versions']))
        .pipe(plugins.csso())
        .pipe(plugins.concat('style.css'))
        .pipe(plugins.csso())
        .pipe(plugins.sourcemaps.write('/maps'))
        .pipe(gulp.dest('css/'))
        .pipe(plugins.notify({message: 'Стили собрались'}))
})

gulp.task('svg', function () {

    gulp.src(pluginSrc.svg)
        .pipe(plugins.svgo())
        .pipe(gulp.dest(function (file) {
            return file.base
        }))
        .pipe(plugins.notify({message: 'SVG оптимизированы'}))
})

gulp.task('images', function () {
    return gulp.src(pluginSrc.images)
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin([
            plugins.imagemin.gifsicle({interlaced: true}),
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70,
            }),
            imageminPngquant({
                quality: [0.7, 0.9],
                speed: 2,
                dithering: 1,
            }),
            plugins.imagemin.svgo({plugins: [{removeViewBox: true}]}),
        ]))
        .pipe(gulp.dest(function (file) {
            return file.base
        }))
        .pipe(plugins.notify({message: 'Картинка оптимизирована'}))

});

gulp.task('watch', function () {
    gulp.watch(pluginSrc.css, gulp.series('css'))
    // gulp.watch(pluginSrc.js, gulp.series('js'))
});
