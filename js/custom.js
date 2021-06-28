
//===============Particles with move===========
document.addEventListener('DOMContentLoaded', function () {
	particleground(document.getElementById('particles'), {
		dotColor: 'rgb(255, 255, 255)',
		lineColor: '#fff',
		lineWidth: '0.2',
		dotWidth: '.2',
		density: '35000',
		particleRadius: '8',
		directionX: 'center',
		directionY: 'down',
		proximity: 150,
		parallax: !0,
		parallaxMultiplier: 10,
	});

}, true);


$(function () {
	"use strict";
	//=================navbar================
	$(".navbar-toggler").on('click', function () {
		$(".navbar-toggler-icon").toggleClass("active-icon")
	});

	$(document).ready(function () {
		$(".navbar-nav li a").on('click', function () {
			$(".navbar-collapse").collapse('hide');
			$(".navbar-toggler-icon").removeClass("active-icon")
		});
	});


	//================for sticky menu=================

	$(window).scroll(function () {
		

		var scrolling = $(this).scrollTop();

		if (scrolling > 400) {
			$(".navbar").addClass("header");
			$(".back-to-top").fadeIn();
		} else {
			$(".navbar").removeClass("header");
			$(".back-to-top").fadeOut();
		}

	});


	//================animation scroll js=====================
	var html_body = $('html, body');
	$('.nav-link , .navbar-brand , a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 60
				}, 1000, );
				return false;
			}
		}
	});

	//===========animated scroll top,preloader============

	$(window).on("load", function () {
		$(".preloader").delay(500).fadeOut(500);


	});

	//===========back to top===========

	$(".back-to-top").click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
	});



	
})

//==================wow.js=====================

	new WOW().init();




// isotope===========



$(function () {
	"use strict";

	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows',
		getSortData: {
			name: '.name',
			symbol: '.symbol',
			number: '.number parseInt',
			category: '[data-category]',
			weight: function (itemElem) {
				var weight = $(itemElem).find('.weight').text();
				return parseFloat(weight.replace(/[\(\)]/g, ''));
			}
		}
	});

	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function () {
			var number = $(this).find('.number').text();
			return parseInt(number, 10) > 50;
		},
		// show if name ends with -ium
		ium: function () {
			var name = $(this).find('.name').text();
			return name.match(/ium$/);
		}
	};

	// bind filter button click
	$('#filters').on('click', '.portfolio-link', function () {
		var filterValue = $(this).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({
			filter: filterValue
		});
	});

	// bind sort button click
	$('#sorts').on('click', '.portfolio-link', function () {
		var sortByValue = $(this).attr('data-sort-by');
		$grid.isotope({
			sortBy: sortByValue
		});
	});

	// change is-checked class on buttons
	$('.button-group').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', '.portfolio-link', function () {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});



});


$(function () {

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		$(".about-image img").css({
			width: (100 + scroll / 5) + "%",
			top: -(scroll / 10) + "%",

		});
	});


})

// skil section

//=================html=========================

$(function () {

	var bar = new ProgressBar.Line(html, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 800,
		color: '#4FACFE',
		trailColor: '#eee',
		trailWidth: 4,
		svgStyle: {
			width: '100%',
			height: '90%'
		},
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#4facfe',
				position: 'absolute',
				right: '0',
				top: '0',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});




	$(window).scroll(function () {

		bar.animate(0.8); // Number from 0.0 to 1.0

	});
});





//=================css=========================

$(function () {

	var bar = new ProgressBar.Line(css, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 1000,
		color: '#4FACFE',
		trailColor: '#eee',
		trailWidth: 4,
		svgStyle: {
			width: '100%',
			height: '90%'
		},
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#4facfe',
				position: 'absolute',
				right: '0',
				top: '0',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});




	$(window).scroll(function () {

		bar.animate(0.7); // Number from 0.0 to 1.0

	});

});




//=================js=========================


$(function () {

	var bar = new ProgressBar.Line(js, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 1200,
		color: '#4FACFE',
		trailColor: '#eee',
		trailWidth: 4,
		svgStyle: {
			width: '100%',
			height: '90%'
		},
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#4facfe',
				position: 'absolute',
				right: '0',
				top: '0',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});

	$(window).scroll(function () {

		bar.animate(0.85); // Number from 0.0 to 1.0

	});

});

//=================bootstrap=========================


$(function () {

	var bar = new ProgressBar.Line(boot, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 1400,
		color: '#4FACFE',
		trailColor: '#eee',
		trailWidth: 4,
		svgStyle: {
			width: '100%',
			height: '90%'
		},
		text: {
			style: {
				// Text color.
				// Default: same as stroke color (options.color)
				color: '#4facfe',
				position: 'absolute',
				right: '0',
				top: '0',
				padding: 0,
				margin: 0,
				transform: null

			},
			autoStyleContainer: false
		},
		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});

	$(window).scroll(function () {

		bar.animate(0.90); // Number from 0.0 to 1.0

	});

});











