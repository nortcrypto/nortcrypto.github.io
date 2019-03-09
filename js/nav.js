//$(document).ready(function() {
//  $(".button-collapse").sideNav();
//});

$(document).ready(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 64) { 
              $('.nav-bar').addClass('solid');
          } else {
              $('.nav-bar').removeClass('solid');
          }
        });
});

