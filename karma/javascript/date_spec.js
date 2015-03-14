describe( "jQuery.multipicker.date", function() {
  var contextObject;

  beforeEach( function() {
    // dummy
    contextObject = jQuery( "body" );
  });

  describe( ".change", function() {
    var originalDate;

    beforeEach( function() {
      originalDate = new Date();
    });

    context( "when millisecond given", function() {
      it( "should change date in place", function() {
        var date,
            changeValue = 123;

        date = jQuery.multipicker.date.change( contextObject, originalDate, { millisecond: changeValue } );

        expect( originalDate.getMilliseconds() ).to.equal( changeValue );
        expect( date.getMilliseconds() ).to.equal( changeValue );
      });
    });

    context( "when second given", function() {
    });

    context( "when minute given", function() {
    });

    context( "when hour given", function() {
    });

    context( "when day given", function() {
    });

    context( "when hour given", function() {
    });

    context( "when year given", function() {
    });
  });
});

describe( "jQuery.multipicker.date.options", function() {
  describe( ".change", function() {
    var originalFields;

    context( "when millisecond given", function() {
      beforeEach( function() {
        originalFields = {}
      });
    });

    context( "when second given", function() {
      beforeEach( function() {
        originalFields = {}
      });
    });

    context( "when minute given", function() {
      beforeEach( function() {
        originalFields = {}
      });
    });

    context( "when hour given", function() {
      beforeEach( function() {
        originalFields = {}
      });
    });

    context( "when day given", function() {
      beforeEach( function() {
        originalFields = {}
      });
    });

    context( "when hour given", function() {
      beforeEach( function() {
        originalFields = {}
      });
    });

    context( "when year given", function() {
      beforeEach( function() {
        originalFields = {}
      });
    });
  });
});
