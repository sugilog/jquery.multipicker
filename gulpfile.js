var wrapTemplate,
    gulp =   require( "gulp" ),
    wrap =   require( "gulp-wrap" ),
    concat = require( "gulp-concat" ),
    pkg =    require( "./package.json" );

wrapTemplate = "<%= data.content %>";

gulp.task( "js", function() {
  return gulp
    .src( "./src/javascript/*.js" )
    .pipe( concat( "jquery.multipicker.js" ) )
    .pipe( wrap( wrapTemplate, pkg, { variable: "data" } ) )
    .pipe( gulp.dest( "./dist/javascript/" ) );
});

gulp.task( "default", [ "js" ] );
