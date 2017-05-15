$ = require 'jquery'

do fill = (item = 'The most creative minds in the Art World') ->
  $('.tagline').append "#{item}"
  fill
