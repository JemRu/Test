$(document).ready(function(){
  $(".shadow").hover(function(){
  	$(this).children().removeClass("animated bounceOut");
    $(this).children().addClass("animated bounceIn");
  },function(){
  	$(this).children().removeClass("animated bounceIn");
    $(this).children().addClass("animated bounceOut");
  });

  $(".text-more").hover(function(){
  	$(this).removeClass("animated slideInRight");
    $(this).addClass("animated infinite shake");
  },function(){
  	$(this).removeClass("animated infinite shake");
  });

  $(window).scroll(function() {
  	if ($(window).scrollTop() > 100) {
  		$("nav").removeClass("before-nav");
  		$("nav").removeClass("animated fadeInUp");
  		$("nav").addClass("after-nav animated fadeInDown");
  	}
  	if ($(window).scrollTop() <= 100) {
  		$("nav").removeClass("after-nav");
  		$("nav").removeClass("animated fadeInDown");
  		$("nav").addClass("before-nav animated fadeInUp");
  	}
  });

  $('#about').click(function() {
    $("html,body").animate({scrollTop: $("#aboutus").offset().top},1500)
  });

  $('#us').click(function() {
    $("html,body").animate({scrollTop: $("#aboutus").offset().top},1500)
  });

  $('#more1').click(function() {
    $("html,body").animate({scrollTop: $("#morecontain").offset().top},1500)
  });

  $('#more2').click(function() {
    $("html,body").animate({scrollTop: $("#morecontain").offset().top},1500)
  });

});