let gulp = require('gulp');
let ts = require('gulp-typescript');
let clean = require('gulp-clean');
let runSequence = require('run-sequence');

gulp.task('build', function() {
    const merge = require('merge2');
    const tsProject = ts.createProject('tsconfig.json');
    let tsResult = tsProject.src()
        .pipe(tsProject());
    return merge([
        tsResult.dts.pipe(gulp.dest('./definitions')),
        tsResult.js.pipe(
            gulp.dest(tsProject.config.compilerOptions.outDir)
        )
    ]);
});

gulp.task('clean', function () {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});

gulp.task('default', function(done) {
    runSequence('clean', 'build', done);
});

gulp.task('watch', function() {
    gulp.watch(["./lib/**/*.ts"], ['build']);
});