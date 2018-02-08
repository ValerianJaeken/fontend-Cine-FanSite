$(document).ready(function() {
  $('.headerCar').slick({
    autoplay: true,
    autoplaySpeed: 4000,
  });

$('button').click(function(){
	$('.hidden-product').show();
	$('button').hide();
});


});

