var $, fill;

$ = require('jquery');

(fill = function(item) {
  $('.tagline').append("" + item);
  return fill;
})('The most creative minds in the Art World');
