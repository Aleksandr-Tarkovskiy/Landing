// Slick slider
$(function() {
	$('.autoplay').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1800,
		dots: true,
		arrows: false,
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		draggable: true,
		mobileFirst: true,
		centerPadding: "0px",
});
});
// Slick slider

// FontAwesome (befor, after)
$(function(){
	FontAwesomeConfig = { searchPseudoElements: true };
});
// FontAwesome (befor, after)

// Smooth scrolling
$(function(){
	$('a[href^="#"]').click(function(){
			var target = $(this).attr('href');
				$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
				return false;
			});
});
// Smooth scrolling

// Button go-top
$(document).ready(function(){
	$('body').append('<a href="#" id="go-top" title="Up"><i class="fas fa-angle-double-up fa-4x"></i></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
	$(this).hide().removeAttr("href");
	if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
	var scrollDiv = $(this);
	$(window).scroll(function() {
	 if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
	 else $(scrollDiv).fadeIn("slow")
	});
	$(this).click(function() {
	 $("html, body").animate({scrollTop: 0}, "slow")
	})
 }
});

$(function() {
 $("#go-top").scrollToTop();
});
// Button go-top
$(function() {
$(".menu_btn").on("click", function() {
		$(this).toggleClass("menu_btn-active");
		$(".nav_mobile").toggle();
	});
});

$(function() {
	$(".video_button").on("click", function() {
		$("video").toggle();
		$(".video_button").hide();
	});
});
