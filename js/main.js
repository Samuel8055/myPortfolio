

/*---------------Smooth Scroll Effect-----------*/

$(document).on('click','a[href^="#"]', function(event) {
	event.preventDefault();

	$('html,body').animate({
		scrollTop: $($.attr(this,'href')).offset().top
	},1000);

});


/*----------------Hamburger Menu-----------------*/

$(".hamburger").click(function() {
	$(this).toggleClass("is-active");

		/*Menu Drop-Down*/
	$(".responsive-nav").slideToggle();
});


/*--------------- Animations ---------------------*/

$(document).ready(function() {
	$("#title").addClass("animated fadeInUp");

	$("#col-left").waypoint(function() {
		$("#col-left").addClass("animated fadeInLeft" );
	},
})		
