$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
var autoplay = true;
setInterval(function() { 
if(autoplay)
$('.carousel.carousel-slider').carousel('next'); }, 8500);
$('.carousel.carousel-slider').hover(function(){ autoplay = false; },function(){ autoplay = true;
});
