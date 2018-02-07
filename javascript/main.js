$(document).ready(function () {
  $('.headerCar').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    draggable: false,
    fade: true,
    speed: 1000
  });

  $('.headerCar').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $(slick.$slides).removeClass('is-animating');
  });

  $('.headerCar').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $(slick.$slides.get(currentSlide)).addClass('is-animating');
  });
});
