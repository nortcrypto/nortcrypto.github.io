//document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.scrollspy');
//    var instances = M.ScrollSpy.init(elems, options);
//});

  // Or with jQuery

//$(document).ready(function(){
//    $('.scrollspy').scrollSpy();
//});

//$(document).ready(function(){
//  $('#content').pushpin({
//    top: $('#content').offset().top
//  });
//  $('.scrollspy').scrollSpy({
//    scrollOfffset: 0
//  });
//});

//$(document).ready(function(){
//  $('.scrollspy').scrollSpy();
//  $('.scrollspy').on('scrollSpy:enter', function() {
//    $('.navbar-fixed').find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
//  });
//  $('scrollspy').on('scrollSpy:exit', function(){
//    $('.navbar-fixed').find('a[href="#'+$(this).attr('id')+'"]').parent().removeClass('active');
//  });
//});


$(document).ready(function(){
  $('#menu_projets').pushpin({
    top: $('#menu_projets').offset().top
  });
  $('.scrollspy').scrollSpy({
    scrollOffset: 50
  });
});

//$(document).ready(function() {
//  $('.toc-wrapper').pushpin({
//    offset: 150
//  });
//  $('.scrollspy').scrollSpy();
//});
