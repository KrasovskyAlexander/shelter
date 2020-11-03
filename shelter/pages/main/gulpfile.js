const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

let isDev = false;

let webConf = {
    output:{
        filename: 'script.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    mode : isDev ? 'development' : 'production'
};

function style(){
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'],
                cascade: true
            })
        )
        .pipe(cleanCSS())
        .pipe(gulp.dest('./'));
}

function script(){
    return gulp.src('./js/index.js')
            .pipe(webpack(webConf))
            .pipe(gulp.dest('./'));
}

function watch (){
    gulp.watch('./js/**/*.js',script);
    gulp.watch('./scss/*.scss',style);
}


exports.style = style;
exports.script = script;
exports.watch = watch;
exports.default = gulp.parallel(style,script,watch);