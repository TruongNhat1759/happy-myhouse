// JavaScript Document
$(function(){
"use strict";
 var ojbect= {
	 init : function(){
		 this.initMainSlide();
		 this.setSameHeightItem();
		 this.getNews();

	 },
		initMainSlide : function(){
		var slide = $(".idx-main-pc, .idx-main-sp");
		if(slide.length > 0){
			slide.slick({
				dots: false,
				infinite: true,
				speed: 500,
				pauseOnHover: false,
				pauseOnFocuse : false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay:true,
				autoplaySpeed: 4000,
				arrows:false,
				fade: true,
				responsive: [
					{
					breakpoint: 751,
					settings: {
					dots: false,
					infinite: true,
					centerMode: false,
					variableWidth: false,
			
					}
					}
				]
			});
		}
          
		},
		setSameHeightItem: function(){
			if($(".box04-item").length > 0){
				$(".box04-item").matchHeight();
			}
			if($(".box04-txt").length > 0){
				$(".box04-txt").matchHeight();
			}
			if($(".box04-desc").length > 0){
				$(".box04-desc").matchHeight();
			}
		},
		getNews:function(){
			$.ajax({
				'url' : 'news/_custom/',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var thumb = val.image1? $(val.image1).attr('src')	: 'images/under_img03.jpg';
						var $li = $('<dl class="js-click"><dt class="box07-img"><a href="news/'+val.url+'"><img src="'+thumb+'" alt="'+val.title+'"></a></dt><dd><p class="box07-news-ttl"><span>' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span>'+tlt+'</p><p class="box07-desc">'+val.description+'</p></dd></dl>');
						$li.appendTo( '.box07-list-news' );
					});
					$('#index .box07-list-news').mCustomScrollbar({
						theme: 'my-theme'
					});
					$(".js-click").click(function () {
						window.location = $(this).find("a").attr("href");
					});
				}
			});
		}
	
	};
	

	 ojbect.init();
});