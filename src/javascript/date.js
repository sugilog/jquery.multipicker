var FIELDS = "millisecond,second,minute,hour,day,month,year".split( "," ),
    FIELD_METHODS = {
      millisecond : "setMilliseconds",
      second      : "setSeconds",
      minute      : "setMinutes",
      hour        : "setHours",
      day         : "setDate",
      month       : "setMonth",
      year        : "setFullYear"
    };

jQuery.multipicker.date = {
  change: function( context, date, fields ) {
    var value, method;
    fields = jQuery.multipicker.date.options.change( context, fields );

    jQuery.each( FIELDS, function( _, field ) {
      value  = fields[ field ];
      method = FIELD_METHODS[ field ];

      if ( typeof value !== "undefined" ) {
        date[ method ]( value );
      }
    });

    return date;
  }
};

jQuery.multipicker.date.options = {
  change: function( context, fields ) {
    var zeroFill = {};

    jQuery.each( FIELDS, function( _, field ) {
      if ( typeof fields[ field ] !== "undefined" ) {
        return false;
      }
      else {
        zeroFill[ field ] = 0;
      }
    });

    return jQuery( zeroFill, fields );
  }
}
