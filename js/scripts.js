
$(function(){
	$('.carousel').carousel({
		interval: 3000
	});

	$('.search').on('click', function(){
		$('.main-menu .navbar-form').slideToggle();
	});
});

$(window).load(function(){
	var carouselCaptionWidth = $('#carousel-sidebar .active img').width();
	$('#carousel-sidebar img').each(function(){
		$(this).attr('width', carouselCaptionWidth);
	});
	$('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidth + 'px');
	$('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px');
	$('.sidebar .carousel .banner').css('max-width', carouselCaptionWidth + 'px');

	 new WOW().init();
});



$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

	function submitForm(){
    // Переменные с данными из формы
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name="+ name + "&email="+ email + "&message="+ message,
        success : function(text){
            if(text == "success"){
                formSuccess();
            }
        }
    });
}
function  formSuccess(){
    $( "#msgSubmit").removeClass( "hidden");
}