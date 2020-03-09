// JavaScript Document
$(function() {
    "use strict";
  var obj= {
	  init: function(){
		    this.toTop();
			this.smoothScroll();
			this.anchorScroll();
			this.clickJS();
			this.Gnavi();
	  },
	//totop
	toTop: function(){
		$("#totop").hide();
		$(window).on("load scroll",function(){
			if($(this).scrollTop() > 100){				  
				$("#totop").fadeIn();
			}
			else{
				$("#totop").fadeOut();				  
			}
		});
		$("#totop").click(function(){
			$('body,html').animate({
			scrollTop:0 
			}, 500);
			return false;
		});
	},
	//smoothScroll
	smoothScroll : function(){
		$('a[href^="#"]').click(function(){
			var wWidth = $(window).width();
			if ( $( $(this).attr('href')).length ) {
				var p = $( $(this).attr('href') ).offset();
				if(wWidth <= 640){
					$('html,body').animate({ scrollTop: p.top - 90}, 500);
				} else {
					$('html,body').animate({ scrollTop: p.top - 60}, 500);
				}
			}
			return false;
		});
	},
	// Anchor scroll
	anchorScroll : function(){
		$(window).load(function(){
			var wWidth = $(window).width();
			var hash1= location.hash;
			var $root = $('html, body');
			var top01 = $(hash1).offset(); 
			if(wWidth <= 640){
			
				if(hash1!==""){ 	  
				$root.animate({ scrollTop:top01.top - 90}, 500);  
				}
			} else {
				if(hash1!==""){  		  
				$root.animate({ scrollTop:top01.top - 60}, 500);  
				}    
			}
		});			
	},
	Gnavi : function(){
		$('.over').click(function(){
			if($(this).hasClass('active')){
				$('.sub-menu').stop().slideUp();
				$(this).removeClass('active');
			} else {
				$('.over').removeClass('active');
				$('.sub-menu').stop().slideUp();
				$(this).addClass('active');
				$(this).find('.sub-menu').stop().slideToggle();
			}
		});
		$('.menu-icon').click(function(){
			$(this).toggleClass('active');
			$('#gnavi').stop().slideToggle('fast');
			$('.sub-menu').stop().slideUp();
			$('.over').removeClass('active');
		});
		$(window).bind("load resize", function() {
			var vW = $(window).width();
			$('.menu-icon').removeClass('active');
			$('#gnavi').removeAttr('style');
			$('.over').removeClass('active');
			$('.sub-menu').stop().slideUp();
		});
	
		$('body').on('click',function(event){
			var target = $(event.target);
			var menuItem = $("#gnavi .gnavi-main > li.over, #gnavi .gnavi-main > li.over > * ");
			var vW = $(window).width();
			if(vW > 640){
				if (!target.is(menuItem)) {
					$("#gnavi .gnavi-main > li.over").removeClass("active")
					$('.sub-menu').stop().slideUp();
				} 
			}
		});
	},
	clickJS:function(){
		$(window).on("load",function(){
			$(".js-click").click(function () {
				window.location = $(this).find("a").attr("href");
			});
		});
	},
  };
  
  obj.init();
});


