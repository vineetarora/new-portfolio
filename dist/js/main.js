$(document).ready
(
	function()
	{


$(window).scroll(function(){ 

var a = 0;
var pos = $(window).scrollTop();
if(pos > a) {
    $("div#my-portfolio-navbar-collapse").css({
                'box-shadow': '0 2px 5px rgba(0,0,0,0.1)'
            });
} else {
    $("#my-portfolio-navbar-collapse").css({
                'box-shadow': 'none',
                
            });
}

var posBottom = $(document).height() - $(window).height() - $(window).scrollTop();
/*
if(posBottom < a+50){
	$(".bottom-line").css("display","block");
	console.log("Hello, it is bottom");
} else{
	$(".bottom-line").css("display","none");
}
*/
});

		var socialIconWidth = $(".social-icon i").width;

		$(".navbar-collapse li").click
		(
			function()
			{
				$('.navbar-collapse').collapse('hide');
			}
			);


		$(".about-link").click
		(
			function()
			{
				$('html,body').animate
				(
					{
		        		scrollTop: $(".about").offset().top
		        	},'slow'
		        );
			}
		);

		$(".works-link").click
		(
			function()
			{
				$('html,body').animate
				(
					{
		        		scrollTop: $(".works").offset().top
		        	},'slow'
		        );
			}
		);


		$(".contact-link").click
		(
			function()
			{
				$('html,body').animate
				(
					{
		        		scrollTop: $(".contact").offset().top
		        	},'slow'
		        );
			}
		);

	},
	cssChanger()
);

window.onresize= function()
{
	cssChanger();
}



function cssChanger()
{
	if($("#size-reference-container").width() < 720)
	{
		 $('link[id="mobileCSS"]').attr('href','css/mobile-index.css');
	}

	else
	{
		$('link[id="mobileCSS"]').attr('href','');
	}
}