var wrapTemplate,
    gulp =   require( "gulp" ),
    wrap =   require( "gulp-wrap" ),
    concat = require( "gulp-concat" ),
    pkg =    require( "./package.json" );

wrapTemplate = "/*!\n" +
               " * <%= data.name %> v<%= data.version %>\n" +
               " *\n" +
               " * Copyright (c) <%= data.author %>, <%= data.homepage %>\n" +
               " * Released under the <%= data.license %> License\n" +
               "*/\n" +
               "\n" +
               "( function() {\n" +
                 '"use strict";\n' +
                 "<%= data.contents %>" +
               "})();";

gulp.task( "js", function() {
  return gulp
    .src( "./src/javascript/*.js" )
    .pipe( concat( "jquery.multipicker.js" ) )
    .pipe( wrap( wrapTemplate, pkg, { variable: "data" } ) )
    .pipe( gulp.dest( "./dist/javascript/" ) );
});

gulp.task( "default", [ "js" ] );
