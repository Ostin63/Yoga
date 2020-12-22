$(document).ready(function () {
	$('.sliler-info').slick({
		slidesToShow: 1, //сколько слайдов показывать в карусели
		slidesToScroll: 1, // сколько слайдов прокручивать за раз
		arrows: false,
		fade: true,
		asNavFor: '.slider-teams',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					vertical: false,
				}
			},
			{
				breakpoint: 1456,
				settings: {
					vertical: true,
				}
			}
		]
	});
	$('.slider-teams').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.sliler-info',
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					vertical: false,
				}
			},
			{
				breakpoint: 1456,
				settings: {
					slidesToShow: 3,
					vertical: true,
				}
			}
		]
	});
});