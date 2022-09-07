const { dest, src } = require("gulp");
var gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-prefix"),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  uglify = require("gulp-uglify"),
  sourceMaps = require("gulp-sourcemaps"),
  notify = require("gulp-notify"),
  zip = require("gulp-zip");
const sass = require("gulp-sass")(require("sass"));
// first task

gulp.task("sass", () => {
  return gulp
    .src("project/sass/main.scss")
    .pipe(sourceMaps.init())
    .pipe(sass({ outputStyle: "compressed" })) 
    .pipe(concat("main.css"))
    .pipe(sourceMaps.write("."))
    .pipe(dest("dist/css"))
    .pipe(notify("Sass Processed Successfully"))
    .pipe(livereload());
});

gulp.task("pug", () => {
  return gulp
    .src("project/index.pug")
    .pipe(pug())
    .pipe(gulp.dest("dist"))
    .pipe(notify("Pug Processed Successfully"))
    .pipe(livereload());
});

gulp.task("js", () => {
  return gulp
    .src("project/js/*.js")
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(notify("JS Processed Successfully"))
    .pipe(livereload());
});

gulp.task("compress", () => {
  gulp
    .src("dist/**/*.*")
    .pipe(zip("website.zip"))
    .pipe(dest("."))
    .pipe(notify("Files Has Been Compressed"));
});

gulp.task("watch", () => {
  require("./server");
  livereload.listen();
  gulp.watch("project/**/*.pug", gulp.series("pug"));
  gulp.watch("project/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("project/js/*.js", gulp.series("js"));
  gulp.watch("dist/**/*.*", gulp.series("compress"));
});
