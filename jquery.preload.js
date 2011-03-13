/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.0
*
* Requires: jQuery 1.2.3+
*/

$.preload = function(){
  var tmp = [], i = arguments.length;
  // reverse loop run faster
  for( ; i-- ; ) tmp.push( $( '<img />' ).attr( 'src', arguments[ i ] ));
};