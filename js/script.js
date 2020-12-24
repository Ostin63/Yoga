$(document).ready(function () {
	$('.sliler-info').slick({
		slidesToShow: 1, //сколько слайдов показывать в карусели
		slidesToScroll: 1, // сколько слайдов прокручивать за раз
		arrows: false,
		fade: true,
		asNavFor: '.slider-teams',
	});
	$('.slider-teams').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		vertical: true,
		arrows: true,
		centerMode: false,
		asNavFor: '.sliler-info',
		responsive: [
			{
				breakpoint: 1456,
				settings: {
					slidesToShow: 3,
					vertical: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					vertical: false,
				}
			}
		]
	});
	$(".slider-teams").on('afterChange', function (event, slick, currentSlide) {
		$(".counter").html(currentSlide + 1 + " &sol; ");
		$(".counter-sub").html(slick.slideCount);
	});

	$('.slider-reviews').slick({
		slidesToScroll: 1,
		slidesToShow: 2,
		arrows: true,
		centerMode: false,
		vertical: false,
		responsive: [
			{
				breakpoint: 1456,
				settings: {
					slidesToShow: 2,
					vertical: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					vertical: false
				}
			}
		]
	});
	$(".slider-reviews").on('afterChange', function (event, slick, currentSlide) {
		$(".counter-reviews").html(currentSlide + 1 + " &sol; ");
		$(".counter-reviews-sub").html(slick.slideCount);
	});

	// waypoints

	let counter = $('.block-counter');
	let waypoints = $('.tracked').waypoint(function (dir) {
		let hash = this.element.id;
		if (dir === 'up') {
			let id = parseInt(hash.split('-')[1]);
			if (id > 1) id--;
			hash = [hash.split('-')[0], id].join('-');
		}

		counter.removeClass('show');

		$.each(counter, function () {
			if ($(this).attr('href').slice(1) == hash) {
				$(this).addClass('show')
			}
		});
	});
	waypoints[0].options.offset = -1;

	// Модальное окно

	$('.left-block').on('click', function () { 
		$('.nav-modal').addClass('show-block');
		$('.modal-overlay').addClass('show-block')
	});
	$('.nav-modal__close').on('click', function () {
		$('.nav-modal').removeClass('show-block');
		$('.modal-overlay').removeClass('show-block');
	});
});
