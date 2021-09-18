const gulp = require("gulp");
const pug = require('gulp-pug');
const gulpLoadPlugins = require("gulp-load-plugins");
const plugins = gulpLoadPlugins();
const webpackStream = require("webpack-stream");
const gulpUtil = require("gulp-util");
const gulpCleanCSS = require("gulp-clean-css");
const del = require("del");
const browserSync = require("browser-sync");
const webp = require("gulp-webp");

const isDevelopment = gulpUtil.env.mode === "development" ? true : false;

gulp.task("clean", function () {
  return del("./docs");
});

gulp.task("scripts", function () {
  return gulp
    .src("./js/index.js")
    .pipe(
      webpackStream({
        output: {
          filename: "scripts.js",
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      [
                        "@babel/preset-env",
                        {
                          targets: {
                            chrome: "58",
                            ie: "11",
                          },
                        },
                      ],
                    ],
                  },
                },
              ],
            },
          ],
        },
        mode: isDevelopment ? "development" : "production",
        devtool: isDevelopment ? "source-map" : "",
      })
    )
    .pipe(gulp.dest("./docs/"))
    .pipe(browserSync.stream());
});

gulp.task("styles", function () {
  return gulp
    .src("./css/styles.scss")
    .pipe(plugins.if(isDevelopment, plugins.sourcemaps.init()))
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.if(!isDevelopment, gulpCleanCSS()))
    .pipe(plugins.if(isDevelopment, plugins.sourcemaps.write()))
    .pipe(gulp.dest("./docs/"))
    .pipe(browserSync.stream());
});

gulp.task("fonts", function () {
  return gulp
    .src("./fonts/*.*")
    .pipe(gulp.dest("./docs/fonts/"))
    .pipe(browserSync.stream());
});

gulp.task("images", function () {
  return gulp
    .src("./images/*.*")
    .pipe(plugins.if(!isDevelopment, plugins.imagemin()))
    .pipe(gulp.dest("./docs/images/"))
    .pipe(browserSync.stream());
});

gulp.task("blocks images", function () {
  return gulp
    .src("./css/**/*.{jpg,png,svg}")
    .pipe(plugins.if(!isDevelopment, plugins.imagemin()))
    .pipe(gulp.dest("./docs/css/"))
    .pipe(browserSync.stream());
});

gulp.task("html", function () {
  return gulp
    .src("./pug/pages/*.*")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./docs/"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: "./docs",
  });
  gulp.watch("./css/**/*.scss", gulp.series("styles"));
  gulp.watch("./js/**/*.js", gulp.series("scripts"));
  gulp.watch("./**/*.pug", gulp.series("html"));
  gulp.watch("./images/*.{jpg,png,svg}", gulp.series("images"));
  gulp.watch("./css/**/*.{jpg,png,svg}", gulp.series("blocks images"));
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("html", "fonts","scripts", "styles", "images", "blocks images")
  )
);
gulp.task("default", gulp.series("build", "watch"));

gulp.task("webp", () =>
  gulp.src("images/*.{jpg,png}").pipe(webp()).pipe(gulp.dest("images/"))
);
