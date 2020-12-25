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

	// Модальное окно навигации

	$('.left-block').on('click', function () {
		$('.nav-modal').addClass('show-block');
		$('.modal-overlay').addClass('show-block');
	});
	$('.nav-modal__close').on('click', function () {
		$('.nav-modal').removeClass('show-block');
		$('.modal-overlay').removeClass('show-block');
	});
	$('.nav-modal__text').on('click', function () {
		$('.nav-modal').removeClass('show-block');
		$('.modal-overlay').removeClass('show-block');
	});
	// Направления
	
	$('.button-top').on('click', function () {
		$('.block-cart-all').addClass('show-block');
		$('.button-top').addClass('button-active');
	});
	$('.block-button').on('click', function () {
		$('.block-cart-all').removeClass('show-block');
		$('.button-top').removeClass('button-active');
	})

	// Форма отправки заявки

	$('.order').on('click', function (evt) {
		$('.intro-modal').addClass('show-block');
		$('.modal-overlay').addClass('show-block');
	});
	$('.modal-form__close').on('click', function (evt) {
		$('.intro-modal').removeClass('show-block');
		$('.modal-overlay').removeClass('show-block');
	});

	jQuery.validator.addMethod("checkMask", function (value, element) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
	});
	
	$('.modal-form').validate({
		rules: {
			fname: {
				required: true,
				minlength: 2
			},
			fmail: {
				required: true,
				email: true
			},
			fphone: {
				required: true,
				checkMask: true
			}
		},
		messages: {
			fname: {
				required: "Это поле обязательно",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			fmail: {
				required: "Это поле обязательно",
				email: "Необходим формат адреса email"
			},
			fphone: {
				required: "Это поле обязательно",
				checkMask: "Введите полный номер телефона"
			},
			fcheckbox: {
				required: "Необходимо Ваше согласие"
			}
		}
	});

	$('#phone').mask("+7(999)999-9999", {
		autoclear: false
	});

	$('.free-lesson').validate({
		rules: {
			fbname: {
				required: true,
				minlength: 2
			},
			fbphone: {
				required: true,
				checkMask: true
			}
		},
		messages: {
			fbname: {
				required: "Это поле обязательно",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			fbphone: {
				required: "Это поле обязательно",
				checkMask: "Введите полный номер телефона"
			}
		}
	});
	$('#phone-bottom').mask("+7(999)999-9999", {
		autoclear: false
	});
	
});

// Абонементы переключатель

let subscriptionsDate = document.querySelectorAll('.subscriptions-date');
for (let i = 0; i < subscriptionsDate.length; i++) {
	let btnItem = subscriptionsDate[0];
	btnItem.classList.add('period-selection'); //period-selection
};

let timeTable = document.querySelectorAll('.block-timetable');
for (let i = 0; i < timeTable.length; i++) {
	let cart = timeTable[0];
	cart.classList.add('active');
};
let catCarts = [];
for (let i = 0; i < timeTable.length; i++) {
	let newsCart = timeTable[i];
	catCarts.push(newsCart)
}

let addThumbnailClickBtn = function (itemButton, newsCart) {
	itemButton.addEventListener('click', function (e) {
		let target = e.target;

		for (let i = 0; i < subscriptionsDate.length; i++) {
			let item = subscriptionsDate[i];
			item.classList.remove('period-selection')
		}
		target.classList.add('period-selection');

		for (let i = 0; i < timeTable.length; i++) {
			let cart = timeTable[i];
			cart.classList.remove('active')

		}
		newsCart.classList.add('active')
	});
};

for (let i = 0; i < subscriptionsDate.length; i++) {
	addThumbnailClickBtn(subscriptionsDate[i], catCarts[i]);
}

	// Описание направлений
	
let recButton = document.querySelectorAll('.rec');
let blockDescription = document.querySelectorAll('.block-description');
let modalOverlay = document.querySelector('.modal-overlay');

let infoCarts = [];
for (let i = 0; i < blockDescription.length; i++) {
	let newsCart = blockDescription[i];
	infoCarts.push(newsCart)
}

let addThumbnailClick = function (itemButton, newsCart) {
	itemButton.addEventListener('click', function (e) {
		
		newsCart.classList.add('show-block');
		modalOverlay.classList.add('show-block');
	});
};

for (let i = 0; i < recButton.length; i++) {
	addThumbnailClick(recButton[i], infoCarts[i]);
};

let btnClose = document.querySelectorAll('.btn-close');

let closeBlock = function (itemButton, newsCart) {
	itemButton.addEventListener('click', function (e) {
		newsCart.classList.remove('show-block');
		modalOverlay.classList.remove('show-block');
	});
};
for (let i = 0; i < btnClose.length; i++) {
	closeBlock(btnClose[i], infoCarts[i]);
};