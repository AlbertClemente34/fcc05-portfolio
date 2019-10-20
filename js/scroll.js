/*
Based on: https://stackoverflow.com/questions/34984911/make-header-navigation-change-colour-when-on-different-section-of-the-website
*/

var section1 = $('#about').offset();
var section2 = $('#projects').scrollTop();
var section3 = $('#contact').scrollTop();

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= section1 && scrollPos < section2) {
    $('#current').css('color', 'rgb(255,255,255)');
  } else if (scrollPos >= section2 && scrollPos < section3) {
    $('#current').css('color', 'rgb(255, 66, 73)');
  } else if (scrollPos >= section3) {
    $('#current').css('color', 'rgb(255,255,255)');
  }
});