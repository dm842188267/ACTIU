/*
* @Author: hp
* @Date:   2019-03-04 13:57:30
* @Last Modified by:   hp
* @Last Modified time: 2019-03-20 17:37:34
*/
// $('.nav li').hover(function(){
// 	$('.nav-menu').show(200)
// 	var n=$(this).index()
// 	$('.nav-menu').children().eq(n).show(200).siblings().hide()
// 	console.log(n)
// })
var timer;
var n=0;
$('.nav li').mouseenter(function(){
	n=$(this).index()
	if(n==3){
		return
	}
	clearTimeout(timer)
	timer=setTimeout(function(){
		$('.nav-menu').show()
		$('.nav-menu>div').eq(n).slideDown(100).siblings().hide()
		$('.HR').show()
	},200)	
	if(n==6){
		clearTimeout(timer)
		$('.nav-menu').slideUp()
	}
})
$('.nav-menu').mouseleave(function(){
	$('.nav-menu').hide()
	$('.nav-menu>div').eq(n).slideUp()
});
$('.link-arrow').hover(function(){
	$('._line').addClass('_lines')
	timer=setTimeout(function(){
		$('._arrow1,._arrow2').addClass('_arrows')
	},1200)
	
},function(){
	$('._line').removeClass('_lines')
	clearTimeout(timer)
	$('._arrow1,._arrow2').removeClass('_arrows')
})
var arr=["images/0.jpg","images/1.jpg","images/2.jpg"]
console.log(arr[0])
$(document).mouseup(function(){
	setTimeout(function(){
		if($('.drag ul').css('transform').replace(/[^0-9\-,]/g,'') == '1,0,0,1,-1333,0' || $('.drag ul').css('transform').replace(/[^0-9\-,]/g,'') == '1,0,0,1,-5332,0'){
			$('.featured-l img').attr('src',''+arr[0])
			$('.featured-r img').attr('src',''+arr[1])
		}if($('.drag ul').css('transform').replace(/[^0-9\-,]/g,'') == '1,0,0,1,-2666,0'){
			$('.featured-l img').attr('src',''+arr[2])
			$('.featured-r img').attr('src',''+arr[0])
		}if($('.drag ul').css('transform').replace(/[^0-9\-,]/g,'') == '1,0,0,1,-3999,0' || $('.drag ul').css('transform').replace(/[^0-9\-,]/g,'') == '1,0,0,1,0,0'){
			$('.featured-l img').attr('src',''+arr[1])
			$('.featured-r img').attr('src',''+arr[2])
		}
		console.log($('.drag ul').css('transform').replace(/[^0-9\-,]/g,''))
	},400)
})
$('.featured-r').click(function() {
	$('.drag ul').css('transition','all .3s')
	if($('.featured-r img').attr('src')=='images/1.jpg'){
		$('.drag ul').css('transform','translate3d(-2666px,0px,0px)')
	}if($('.featured-r img').attr('src')=='images/0.jpg'){
		$('.drag ul').css('transform','translate3d(-3999px,0px,0px)')
	}if($('.featured-r img').attr('src')=='images/2.jpg'){
		$('.drag ul').css('transform','translate3d(-5332px,0px,0px)')
	}
	console.log($('.featured-r img').attr('src'))
	// console.log(tsn)
});
$('.featured-l').click(function() {
	$('.drag ul').css('transition','all .3s')
	if($('.featured-l img').attr('src')=='images/0.jpg'){
		$('.drag ul').css('transform','translate3d(0px,0px,0px)')
	}if($('.featured-l img').attr('src')=='images/1.jpg'){
		$('.drag ul').css('transform','translate3d(-2666px,0px,0px)')
	}if($('.featured-l img').attr('src')=='images/2.jpg'){
		$('.drag ul').css('transform','translate3d(-1333px,0px,0px)')
	}
	console.log($('.featured-l img').attr('src'))
	// console.log(tsn)
});
$('.seo li').click(function() {
	$(this).toggleClass('seoadd');
	$(this).children('p').stop().slideToggle()
	$(this).children().children('.after').toggle()
});
$(window).scroll(function(){
	var n=$(window).scrollTop()
	if(n > 0){
		$('.h80').addClass('h60')
		$('.key').addClass('pd-17px')
		$('.link-arrow').addClass('left-arrow')
		$('.pd-80px').addClass('pd-60px')
		$('.logo').addClass('font-s-28px')
		$('.nav, .n-right').addClass('navs')

	}else{
		$('.h80').removeClass('h60')
		$('.key').removeClass('pd-17px')
		$('.link-arrow').removeClass('left-arrow')
		$('.pd-80px').removeClass('pd-60px')
		$('.logo').removeClass('font-s-28px')
		$('.nav, .n-right').removeClass('navs')
	}
})
var x=0
$(window).resize(function(){
	x=$(window).width()
	if(x<623){
		var mySwiper1 = new Swiper('.swiper1',{
  		autoplay : 3000,
		autoplayDisableOnInteraction : false,   		
        loop: true,
        slidesPerView : 1,
		loopedSlides :3,
        
    });
	}else{
		var mySwiper1 = new Swiper('.swiper1',{
  		autoplay : 3000,
		autoplayDisableOnInteraction : false,   		
        loop: true,
        slidesPerView : 3,
		loopedSlides :3,
        spaceBetween: 25,
        nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev'
        
    });
	}
})
$('.sidenav-btn').click(function(e){
	e.preventDefault()
	$('.wrap-bg').show()
	$('.sml-wrap').addClass('nav-left')
	setTimeout(function(){
		$('.sn-btn1').addClass('deg40');
		$('.sn-btn2').addClass('opc');
		$('.sn-btn3').addClass('deg-40');
	},400)
})
$('.wrap-bg').click(function(){
	$('.wrap-bg').hide()
	$('.sml-wrap').removeClass('nav-left')
	setTimeout(function(){
		$('.sn-btn1').removeClass('deg40');
		$('.sn-btn2').removeClass('opc');
		$('.sn-btn3').removeClass('deg-40');
	},400)
})
$('.canclick li').click(function(e){
	e.preventDefault()
	n=$(this).index()
	if(n>0&&n<6){
		$('.side_nav').eq(n).toggleClass('nav-left');
		$('.canclick').toggleClass('nav-left1');
	}
})
$('.nav-title').click(function(e){
	e.preventDefault()
	$('.canclick').toggleClass('nav-left1');
	$(this).parent('.side_nav').toggleClass('nav-left');
})
$('.sousuo').click(function(e){
	e.preventDefault()
	$('.search-head').css({'opacity':'1','z-index':'999999'})
})
$('.hidden-search').click(function(){
	$('.search-head').css({'opacity':'0','z-index':'0'})
})