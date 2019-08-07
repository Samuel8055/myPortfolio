document.querySelector('.view-profile').addEventListener('click', function() {
    document.querySelector('#arr-right').style.display = 'none';
    document.querySelector('#arr-down').style.display = 'inline-block';
})

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

/*-----------------Animations--------------------*/

$(document).ready(function() {
    // $(".text").addClass("animated zoomIn");

    $(".col-left").waypoint(function() {
        $(".col-left").addClass("animated fadeInLeft");
    },
    {
        offset: "70%"
    });

    $(".col-right").waypoint(function() {
        $(".col-right").addClass("animated fadeInRight");
    },{
        offset: "70%"
    });

    $(".portions").waypoint(function() {
        $(".portions").addClass("animated slideInUp");
    },{
        offset: "70%"
    });

    $(".css").waypoint(function() {
        $(".css").addClass("animated zoomIn");
    },{
        offset: "70%"
    });

    $(".html").waypoint(function() {
        $(".html").addClass("animated zoomIn");
    },{
        offset: "70%"
    });

    $(".js").waypoint(function() {
        $(".js").addClass("animated zoomIn");
    },{
        offset: "70%"
    });
    $(".jq").waypoint(function() {
        $(".jq").addClass("animated zoomIn");
    },{
        offset: "80%"
    });
    $(".resp").waypoint(function() {
        $(".resp").addClass("animated zoomIn");
    },{
        offset: "80%"
    });
    $(".bs").waypoint(function() {
        $(".bs").addClass("animated zoomIn");
    },{
        offset: "80%"
    });



    $(".column1").waypoint(function() {
        $(".column1").addClass("animated slideInUp");
    },{
        offset: "70%"
    });
    $(".column2").waypoint(function() {
        $(".column2").addClass("animated slideInUp");
    },{
        offset: "70%"
    });

    
});