let gulp            = require('gulp');
let sass            = require('gulp-sass');

let srcCSSPath      = './src/scss/**/*.scss';
let destCSSPath     = './src/css/';

gulp.task ('cssify', () =>{
    gulp.src(srcCSSPath)
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest(destCSSPath))
});

gulp.task ('watchCss', () => {
    gulp.watch (srcCSSPath , ['cssify'])
});

gulp.task ('default' , ['watchCss'])