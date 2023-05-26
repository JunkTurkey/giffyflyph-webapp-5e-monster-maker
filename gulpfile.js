import gulp from "gulp";
import connect from "gulp-connect";
import path from "path";
import using from "gulp-using";
import babelify from "babelify";
import browserify from "browserify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import { exec } from "child_process";
import { deleteAsync } from "del";
import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);
const app = "2.0.1";

/*
 * Purge all build content.
 */
gulp.task("purge", function (cb) {
  return deleteAsync(path.resolve("dist"));
});

/*
 * Deploy all relevant images to the dist folder.
 */
gulp.task("build-images", function (cb) {
  return gulp
    .src(path.join("src", "images", "**", "*.+(jpg|jpeg|gif|png|svg|ico)"), {
      base: path.join("src", "images"),
    })
    .pipe(using())
    .pipe(gulp.dest(path.join("dist", "images")));
});

/*
 * Deploy all relevant stylesheets to the dist folder.
 */
gulp.task("build-pages", function (cb) {
  return gulp
    .src(path.join("src", "pages", "**", "*.html"), {
      base: path.join("src", "pages"),
    })
    .pipe(using())
    .pipe(gulp.dest(path.join("dist")));
});

/*
 * Deploy all relevant stylesheets to the dist folder.
 */
gulp.task("build-stylesheets", function (cb) {
  return gulp
    .src(path.join("src", "stylesheets", "**", "*.scss"), {
      base: path.join("src", "stylesheets"),
    })
    .pipe(using())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(
      rename(function (path) {
        path.basename += `_v${app.replace(/\./g, "_")}`;
      })
    )
    .pipe(gulp.dest(path.join("dist", "stylesheets")));
});

/*
 * Build templates js from hbs files.
 */
gulp.task("build-templates", function (cb) {
  exec(
    'handlebars "./src/templates" -f "./src/scripts/templates.js" --extension "hbs" -m',
    function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    }
  );
});

/*
 * Build templates js from hbs files.
 */
gulp.task("delete-templates", function (cb) {
  return deleteAsync(path.resolve("src/scripts/templates.js"));
});

/*
 * Deploy all relevant scripts to the dist folder.
 */
gulp.task(
  "build-scripts",
  gulp.series(
    "build-templates",
    function (cb) {
      return browserify({
        entries: [`src/scripts/monstermaker.js`],
        transform: [babelify.configure({ presets: ["@babel/preset-env"] })],
        standalone: "MonsterMaker",
      })
        .bundle()
        .pipe(source(`monstermaker_v${app.replace(/\./g, "_")}.js`))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulp.dest(`dist/scripts`));
    },
    "delete-templates"
  )
);

/*
 * Watch folders for any changes.
 */
gulp.task("watch", function (cb) {
  gulp.watch(
    "src/images/**/*.+(jpg|jpeg|gif|png|svg|ico)",
    gulp.series(["build-images"])
  );
  gulp.watch("src/pages/**/*.html", gulp.series(["build-pages"]));
  gulp.watch("src/scripts/**/*.js", gulp.series(["build-scripts"]));
  gulp.watch("src/templates/**/*.hbs", gulp.series(["build-scripts"]));
  gulp.watch("src/stylesheets/**/*.scss", gulp.series(["build-stylesheets"]));
});

/*
 * Master build tasks.
 */
gulp.task(
  "build",
  gulp.series(
    "purge",
    gulp.parallel(
      "build-images",
      "build-scripts",
      "build-stylesheets",
      "build-pages"
    ),
    function (cb) {
      return cb();
    }
  )
);

/*
 * Master build tasks.
 */

gulp.task(
  "build",
  gulp.series(
    "purge",
    gulp.parallel(
      "build-images",
      "build-scripts",
      "build-stylesheets",
      "build-pages"
    ),
    function (cb) {
      return cb();
    }
  )
);

gulp.task("build-and-watch", gulp.series("build", "watch"));

gulp.task("webserver", function () {
  connect.server({
    livereload: true,
    root: [".", "dist"],
  });
});

gulp.task("default", gulp.series("build"));
