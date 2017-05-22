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

	/*$('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	});  */

	var myIndex = 0;
	carousel();

	function carousel() {
    	var i;
    	var x = document.getElementsByClassName("home-slides");
    		for (i = 0; i < x.length; i++) {
       			x[i].style.display = "none"; 
    }
    	myIndex++;
    	if (myIndex > x.length) {myIndex = 1}    
    		x[myIndex-1].style.display = "block";
    		setTimeout(carousel, 4000);    
	}
});