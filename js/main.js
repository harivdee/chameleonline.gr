$(document).ready(function(){
	
	$('.chameleon-slides:gt(0)').hide();

    setInterval(function() {
        $(".chameleon-slides:first-child").fadeOut(0).next(".chameleon-slides").fadeIn(0).end().appendTo("#image-slides")
	}, 3000);

	$('nav ul li').mouseenter(function(){
		$(this).css('color','#FF1493');
	})
    
	$('nav ul li').mouseleave(function(){
		$(this).css('color','#006400');
	})   
})