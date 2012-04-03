(function( $ ){

  $.fn.revealEmail = function(formatLbl) {
    formatLbl = (typeof formatLbl == 'undefined') ? false : formatLbl;

    this.each(function() {
      var spl = $(this).attr('href').split('/');
      $(this).attr( 'href', 'mailto:' + spl[1] + '@' + spl[0] );

      if( formatLbl ){
        $(this).text( 'mailto:' + spl[1] + '@' + spl[0] );
      }
    });
    return this;
  };

})( jQuery );