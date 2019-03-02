document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
});

  // Or with jQuery

 $(document).ready(function(){
    $('.scrollspy').scrollSpy();
});
