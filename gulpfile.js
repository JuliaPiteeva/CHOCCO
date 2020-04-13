const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const px2rem = require("gulp-smile-px2rem");
const gcmq = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite");
const gulpif = require("gulp-if");

const env = process.env.NODE_ENV;

const { SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS } = require("./gulp.config");

sass.compiler = require("node-sass");

task("clean", () => {
  return src(`${DIST_PATH}/**/*`, { read: false }).pipe(rm());
});

task("copy:html", () => {
  return src(`${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

const img = [`${SRC_PATH}/img/*.jpg`, `${SRC_PATH}/img/*.png`];

task("copy:img", () => {
  return src(img)
    .pipe(dest(`${DIST_PATH}/img`))
    .pipe(reload({ stream: true }));
});

task("copy:video", () => {
  return src("src/video/*.mp4")
    .pipe(dest(`${DIST_PATH}/video`))
    .pipe(reload({ stream: true }));
});

task("styles", () => {
  return (
    src([...STYLE_LIBS, "src/css/main.scss"])
      .pipe(gulpif(env === "dev", sourcemaps.init()))
      .pipe(concat("main.min.scss"))
      .pipe(sassGlob())
      .pipe(sass().on("error", sass.logError))
      // .pipe(px2rem()) пересчитывает ужасно
      .pipe(
        gulpif(
          env === "prod",
          autoprefixer({
            cascade: false,
          })
        )
      )
      .pipe(gulpif(env === "prod", gcmq()))
      .pipe(gulpif(env === "prod", cleanCSS()))
      .pipe(gulpif(env === "dev", sourcemaps.write()))
      .pipe(dest(DIST_PATH))
      .pipe(reload({ stream: true }))
  );
});

task("scripts", () => {
  return src(`${SRC_PATH}/scripts/*.js`)
    .pipe(gulpif(env === "dev", sourcemaps.init()))
    .pipe(concat("main.min.js", { newline: ";" }))
    .pipe(
      gulpif(
        env === "prod",
        babel({
          presets: ["@babel/env"],
        })
      )
    )
    .pipe(gulpif(env === "prod", uglify()))
    .pipe(gulpif(env === "dev", sourcemaps.write()))
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

task("icons", () => {
  return (
    src("src/icons/*.svg")
      //       // .pipe(
      //       //   svgo({
      //       //     plugins: [
      //       //       {
      //       //         removeAttrs: {
      //       //           attrs: "(fill|stroke|style|width|height|data.*)"
      //       //         }
      //       //       }
      //       //     ]
      //       //   })
      //       // )
      //       // .pipe(
      //       //   svgSprite({
      //       //     node: {
      //       //       symbol: {
      //       //         sprite: "../sprite.svg"
      //       //       }
      //       //     }
      //       //   })
      //       // )
      .pipe(dest(DIST_PATH))
  );
});

task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
    // open: false
  });
});

task("watch", () => {
  watch("./src/css/**/*.scss", series("styles"));
  watch("./src/*.html", series("copy:html"));
  watch("./src/scripts/*.js", series("scripts"));
  // watch("src/img/icons/*.svg", series("icons"));
});

task(
  "default",
  series(
    "clean",
    parallel(
      "copy:html",
      "styles",
      "scripts",
      "icons",
      "copy:img",
      "copy:video"
    ),
    parallel("watch", "server")
  )
);

task(
  "build",
  series(
    "clean",
    parallel(
      "copy:html",
      "styles",
      "scripts",
      "icons",
      "copy:img",
      "copy:video"
    )
  )
);
