/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.1.0
*
* Requires: jQuery 1.3+
*/
;( function( $ ){
  $.preload = function(){
    var imgs = $.isArray(arguments[ 0 ]) ? arguments[ 0 ] : arguments;
    var tmp = [], i = imgs.length;
    // reverse loop run faster
    for( ; i-- ; ) tmp.push( $( '<img />' ).attr( 'src', imgs[ i ]));
  };
})( jQuery );
