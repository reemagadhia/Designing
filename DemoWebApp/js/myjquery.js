$(document).ready(function(){
	$( ".menu-cart" ).click(function() {
		$( ".dropdown-menu" ).slideToggle( "slow" );
	});
	$(function () {
	$("#rateYo").rateYo({
		starWidth: "25px"
	});
	});
	$('#gotop').gotop({
		 width: '60px',height: '60px',
	});
	$('#search').css( "padding-left" ,"22px");
	if (window.matchMedia('(min-width: 768px)').matches) {
		$('#search').focus(function()
		{
			$(this).animate({ width: '+=200', marginLeft: '-200'}, 'slow');
			$("#menu-cart").css( "display" ,"none");
			$("#menu-login").css( "display" ,"none");
			$("#menu-logout").css( "display" ,"none");
			$("#menu-profile").css( "display" ,"none");
			$("#menu-welcome").css( "display" ,"none");
			$(this).css( "margin-top","18px");
			$('#search').css( "background-position", "left");
		}).blur(function()
		{
			$(this).animate({ width: '-=200', marginLeft: '0'  }, 'slow');
			setTimeout(function(){$(".menu-cart").css( "display" ,"block");$("#menu-login").css( "display" ,"initial");$("#menu-logout").css( "display" ,"initial");$("#menu-profile").css( "display" ,"initial");$("#menu-welcome").css( "display" ,"initial");$('#search').css( "background-position", "center");},450);
			});}else{
		$('#search').focus(function()
		{
			$(this).animate({width: '+=200', marginLeft: '-100'}, 'slow');
			$("#menu-cart").css( "display" ,"none");
			$("#menu-login").css( "display" ,"none");
			$("#menu-logout").css( "display" ,"none");
			$("#menu-profile").css( "display" ,"none");
			$("#menu-welcome").css( "display" ,"none");
			$(this).css( "margin-top","18px");
			$('#search').css( "background-position", "left");
		}).blur(function()
		{
			$(this).animate({ width: '-=200', marginLeft: '0'  }, 'slow');
			setTimeout(function(){$(".menu-cart").css( "display" ,"block");$("#menu-login").css( "display" ,"initial");$("#menu-logout").css( "display" ,"initial");$("#menu-profile").css( "display" ,"initial");$("#menu-welcome").css( "display" ,"initial");$('#search').css( "background-position", "center");},450);
			});
		}
		
		$('.slider_four_in_line').EasySlides({'autoplay': false, 'show':5});
		$(".image-slider").click(function(){
			var src = $(this).attr('src');
			$(".image-big").attr('src',src);
		});

		if (window.matchMedia('(min-width: 768px)').matches) {
			$('.slider_four_in_line').EasySlides({'autoplay': false, 'show':5});
		}else{
			$('.slider_four_in_line').EasySlides({'autoplay': false, 'show':3});
		}
	});