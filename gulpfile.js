const gulp = require('gulp');
const gulpTypescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tsProject = gulpTypescript.createProject('tsconfig.json');

// Compile TypeScript
gulp.task('default', function () {
    return tsProject.src()
        .pipe(gulpTypescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});