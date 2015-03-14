var wrapTemplate,
    fs     = require( "fs" ),
    gulp   = require( "gulp" ),
    wrap   = require( "gulp-wrap" ),
    concat = require( "gulp-concat" ),
    pkg    = require( "./package.json" );

wrapTemplate = fs.readFileSync( "./res/wrap.tmpl", "utf8" );

gulp.task( "js", function() {
  return gulp
    .src( "./src/javascript/*.js" )
    .pipe( concat( "jquery.multipicker.js" ) )
    .pipe( wrap( wrapTemplate, pkg, { variable: "data" } ) )
    .pipe( gulp.dest( "./dist/javascript/" ) );
});

gulp.task( "default", [ "js" ] );
