$(document).ready(function () {
	$('.header__burger').click(function (e) {
		$('.header__burger, .header__menu').toggleClass('active');
		if ($('.header__logo').hasClass('active')) {
			setTimeout(() => {
				$('.header__logo').removeClass('active');
			}, 300)
		} else {
			$('.header__logo').addClass('active');
		}
		$('body').toggleClass('lock');
	});
	$('.item').click(function (e) {
		$(this).toggleClass('active').children('.item__body').children('.item__about').slideToggle(300)
	});

});

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

function sliderInit() {
	var $slider = $('.slider');
	$slider.each(function() {
		var $sliderParent = $(this).parent();
		$(this).slick({
			adaptiveHeight: true,
			responsive:[{
				breakpoint: 500,
				settings: {
					arrows: false,
				}
			}],
		});

		if ($(this).find('.slide').length > 1) {
			$(this).siblings('.slides-numbers').show();
		}

		$(this).on('afterChange', function(event, slick, currentSlide){
			$sliderParent.find('.slides-numbers .active').html((currentSlide + 1));
		});

		var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
		$sliderParent.find('.slides-numbers .total').html((sliderItemsNum));

	});

	$('.slick-next').on('click', function () {
		console.log('test');
		$('.slider-holder').slick('slickGoTo', 5);
	});
}

sliderInit();