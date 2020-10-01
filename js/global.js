$(document).ready(function(){
	$('#banner .banner-container').slick({
		slidesToShow: 1,
		dots: false,
		arrows: true,
		appendArrows: $("#banner .arrow")
	});
	$('.top-header .left-side').hover(function() {
		$(this).toggleClass('animated shake');
	});
});