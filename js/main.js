$(document).ready(function(){


	$('.fa-bars').click(function(){
		$(this).toggleClass('fa-times');
		$('.navbar').toggleClass('nav-time');
	});

	$(window).on('load scroll' ,function(){
		$('.fa-bars').removeClass('fa-times');
		$('.navbar').removeClass('nav-time');

		if($(window).scrollTop() > 900){
      	$('.header').css({'background':'#FFADAD','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    	}else{
      	$('.header').css({'background':'none','box-shadow':'none'});
    	}
	});
});