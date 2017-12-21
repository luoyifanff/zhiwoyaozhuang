
define(['jquery'],function($){
	
	//顶部
	var topRight = function(){
		$('.right').on('mouseover','.col-md-3',function(){		
			$(this).css('background','#fff').find('div').stop().slideDown(300).siblings('i').css('background-position-y','-105px');
		}).on('mouseout','.col-md-3',function(){		
			$(this).css('background','transparent').find('div').stop().slideUp(300).siblings('i').css('background-position-y','-70px');			
		})
	}
	
	
	//购物车（注意父元素reletive但是不能给z-index，子元素absolute给负的z-index）
	var shopcar = function(){
		var $empty_top = $('.shopcar').height()-1;
		var $zhezhao_top = $empty_top;		
		$('.shopcar').hover(
			function(){
				$(this).css('border-bottom','none').find('i').css('background-position-y','-116px');
				$(this).find('.zhezhao').show().css('top',$zhezhao_top+'px');
				$(this).find('.empty').show().css('top',$empty_top+'px');
				$(this).find('.empty').find('p:first').css({
					'font': '20px/26px ""'
				});
				$(this).find('.empty').find('p:last').css({
					'font': '16px/26px ""'
				})
			},
			function(){
				$(this).css('background-position-y','-81px').find('.empty').stop().slideUp(300,function(){
					$(this).parent('.shopcar').find('.zhezhao').hide();
					$(this).parent('.shopcar').css('border-bottom','2px solid #e2e2e2');
				})	
			}
		)
		$('.shopcar').on('click',function(){
			window.open('cart.html','_blank');
		})
		$('#aside-r .shopping').on('click',function(){
			window.open('cart.html','_blank');
		})
	}
	//nav下拉列表中的icon
	function navListIcon(){
		$('#nav').find('.list').find('dt').css('background','url(img/nav-zwsc.png) no-repeat');
		$('#nav').find('.list').find('dt').eq(0).css('background-position','5px 3px');
		$('#nav').find('.list').find('dt').eq(1).css('background-position','5px -24px');
		$('#nav').find('.list').find('dt').eq(2).css('background-position','5px -58px');
		$('#nav').find('.list').find('dt').eq(3).css('background-position','5px -87px');
	}
	
	//显示nav下拉列表
	var navList = function(){
		$('#nav').find('.zwsc').hover(
			function(){
				navListIcon();
				$(this).find('i').css('background-position-y','-189px');
				$(this).children('.list').stop().slideToggle(200);
			},
			function(){
				$(this).find('i').css('background-position-y','-154px');
				$(this).children('.list').stop().slideToggle(200);
			}
		)
	}
	
	
	//nav右侧（注意必须右浮动）
	var navRight = function(){
		$('#nav ol').find('li').hover(
	    	function(){
	      	$(this).stop().animate({width:'100px'});
	      },function(){
	      	$(this).stop().animate({width:0});
	      });	     
	}
	
	
    var banner = function(){
    	//请求banner背景图
    	$.ajax({
	    	url: 'php/bannerImg.php',
	    	dataType: 'json'
	    }).done(function(data){   	
	    	$.each(data,function(index,value){
	    		//console.log($('#banner a'))
	    		$('#banner a').eq(index).css({
	    			'background-image':'url('+value.url+')',
	    			'background-position':'center'
	    		});
	    	})
	    })	      
	    bannerLunBo();	    
    }
    
    //banner轮播图
    function bannerLunBo(){
    	var $suoyin=0;
    	$('#banner ul li').eq($suoyin).show().siblings().hide(); //初始先显示第一张	 
    	$('#banner ol').find('li').each(function(index){
    		//console.log(index)
    		$(this).attr('sign',index);//给轮播图的小标设置索引   		
    	})
    	
		//点击小标播放		
		$('#banner ol').on('click','li',function(){
  			$suoyin = $(this).attr('sign');  			
  			play();		
		})
		
		//自动播放
    	var $timer = setInterval(function(){   		
    		if($suoyin==$('#banner ol').find('li').size()-1){
    			$suoyin = 0;
    		}else{
    			$suoyin++;   			 
    		} 
    		play();
    	},2000)
    	//移入暂停轮播
    	$('#banner a').hover(
    		function(){
    			clearInterval($timer);
    		},
    		function(){
    			$timer = setInterval(function(){
    				if($suoyin==$('#banner ol').find('li').size()-1){
		    			$suoyin = 0;
		    		}else{
		    			$suoyin++;   			 
		    		} 
		    		play();
		    	},2000)
    		}
    	)
		function play(){
			$('#banner ol li').eq($suoyin).addClass('active').siblings().removeClass('active');
    		$('#banner ul li').eq($suoyin).show().siblings().hide();
		}	    	
    }
    
    var headlines_transform = function(){
    	//向数据库请求数据，添加到headlines相应位置
    	$.ajax({
			url:"php/headlines.php",
			dataType:'json'
		}).done(function(data){
			//console.log(data)
			$.each(data,function(index,value){
	    		$('#headlines img').eq(index).attr('src',value.url);
	    		$('#headlines p a').eq(index).html(value.text);
	    		$('#headlines b u').eq(index).text(value.price);
	    	})
		});
		//headline的img和button透明度变换
    	$('#headlines img').on('mouseover',function(){
	    	$(this).fadeTo(100,0.8);
		    }).on('mouseout',function(){
		    	$(this).fadeTo(100,1);
		    })
		    
		    $('#headlines button').on('mouseover',function(){
		    	$(this).fadeTo(100,0.8);
		    }).on('mouseout',function(){
		    	$(this).fadeTo(100,1);
	    })
		//调用倒计时模块    
		var $label = $('#headlines .introduce span i');
    	daojishi($label);
    }
    
    function daojishi(obj){
    	var $endTime = new Date("2018/10/30");//截止日期
	  	setInterval(function(){
		    var $startTime = new Date();
		    var $time = $endTime - $startTime;
		    var $day = parseInt($time / 1000 / 60 / 60 / 24);
		    var $hour = parseInt($time / 1000 / 60 / 60 % 24);
		    var $minute = parseInt($time / 1000 / 60 % 60);
		    var $seconds = parseInt($time / 1000 % 60);
		    obj.html($day + "天" + $hour + "小时" + $minute + "分" + $seconds + "秒");
	  	},1000)
    }
	var brandImg = function(){
		//导入畅销品牌logo图片
		$.ajax({
			url:"php/brandHot.php",
			dataType:'json'
		}).done(function(data){
			console.log(data)
			$.each(data,function(index,value){
	    		$('.brandlogo .hot img').eq(index).attr('src',value.url);	
	    	})
		});
		//导入欧美品牌logo图片
		$.ajax({
			url:"php/brandUSA.php",
			dataType:'json'
		}).done(function(data){
			$.each(data,function(index,value){
	    		$('.brandlogo .usa img').eq(index).attr('src',value.url);
	    	})
		});
		//导入日韩品牌logo图片
		$.ajax({
			url:"php/brandJapan.php",
			dataType:'json'
		}).done(function(data){
			$.each(data,function(index,value){
	    		$('.brandlogo .japan img').eq(index).attr('src',value.url);
	    	})
		});
		//导入国内品牌logo图片
		$.ajax({
			url:"php/brandChina.php",
			dataType:'json'
		}).done(function(data){
			$.each(data,function(index,value){
	    		$('.brandlogo .china img').eq(index).attr('src',value.url);
	    	})
		});
		//导入brand右侧pic图片
		$.ajax({
			url:"php/brandPic.php",
			dataType:'json'
		}).done(function(data){
			$.each(data,function(index,value){
	    		$('.brandlogo .pic img').eq(index).attr('src',value.url);
	    	})
		});
			
		$('.brandlogo ul:not(:first)').css("display","none"); //初始先隐藏其他兄弟元素，否则show失效
		//console.log($('.brandlogo ul:not(:first)'))
		$('.brandlogo .pic li:not(:first)').hide();
		
		var $arrowTop = $('#brand .pic').height()/2 - $('#brand .pic span').height()/2;
		$('.brandlogo .pic span').css('top',$arrowTop);
		
		//brandlogo对应的Tab切换	
		var $index = 0;
		$('.area li').on('mouseover',function(){
			$index = $(this).index();			
			tab();
		})
		//左右箭头切换
		$('.glyphicon-menu-left').click(function(){
			if($index==0){
    			$index = $('#banner ol').find('li').size()-2;
    		}else{
    			$index--;   			 
    		} 
    		tab();
		})
		$('.glyphicon-menu-right').click(function(){
			if($index==$('#banner ol').find('li').size()-2){
    			$index = 0;
    		}else{
    			$index++;
    		} 
    		tab();
		})
		function tab(){
			$('.area li').eq($index).addClass('areaHover').siblings().removeClass('areaHover');
			$('.brandlogo ul').eq($index).show().siblings('ul').hide();
			//brand右侧的轮播切换
			$('.brandlogo .pic li').eq($index).show().siblings('li').hide();
		}
	}
	
	
	var HotDeals = function(){		
		var $scrollTop;
		lazyLoad();//打开或刷新页面时加载一次
			
		$(window).scroll(function(){
			$scrollTop = $(window).scrollTop();
			if($scrollTop>=3000)
			{
				//console.log($('#hot_deals li').length)
				if($('#hot_deals li').length>=40){
					$(window).unbind('scroll');
				}else{
					for(var i=0;i<3;i++){
						var $clone=$('#hot_deals li:first').clone(true);
						$('#hot_deals ul').append($clone);
					}
					lazyLoad();
				}		
			}
		})
		
	}
	
	
	function lazyLoad(){
		var $label = $('#hot_deals .time span u');
		daojishi($label);
		$.ajax({
			url:"php/HotDeals.php",
			dataType:'json'
		}).done(function(data){
			$.each(data,function(index,value){				
	    		$('#hot_deals .image a').eq(index).css('background','url('+value.url+') no-repeat center').attr('href','detail.html?sid='+value.sid);
	    		$('#hot_deals .name p a').eq(index).html(value.title).attr('href','detail.html?sid='+value.sid);
	    		$('#hot_deals .name .join i').eq(index).html(value.price);
	    		$('#hot_deals .time b u').eq(index).html(value.people);	    		
	    	})
		});
	}
	
	
	try{
		var cobj =JSON.parse(cookie.getcookie('goods'));
		
		//var if(cookie.getcookie('user')){
		
	}catch(e){
		
	}
	

	if(!z){
		cookie.setcookie("goods",{});	
	}
	
	var num=0;	
	$('#hot_deals button').on('click',function(){		
		var $pid='';
		$pid = String($(this).parents('li').find('.image a').attr('href').substring(16));				
		if(cobj[$pid]){
			num = cobj[$pid];
			num++;
			cobj[$pid] =num;
		}else{
			cobj[$pid]=1;
		}
		cookie.setcookie('goods',cobj,100);
	})
	

	/*******原网页没接口，做个淘宝的*********/
	var API = function(){
		$('.search input').eq(1).click(function(){
			var $val = $('.search input').eq(0).val();
			$.ajax({
				url:'https://suggest.taobao.com/sug?code=utf-8&q='+$val+'&_ksTS=1508222604030_448&callback=jsonp449&k=1&area=c2c&bucketid=15',
				dataType:'jsonp'
			}).done(function(data){
				window.location.assign('https://s.taobao.com/search?q='+$val);
			})
		})
		
		$('#subsearch input').eq(1).click(function(){
			var $val = $('#subsearch input').eq(0).val();
			$.ajax({
				url:'https://suggest.taobao.com/sug?code=utf-8&q='+$val+'&_ksTS=1508222604030_448&callback=jsonp449&k=1&area=c2c&bucketid=15',
				dataType:'jsonp'
			}).done(function(data){
				window.location.assign('https://s.taobao.com/search?q='+$val);
			})
		})
	}
	
	
    return {
    	load:(function(){
    		topRight();
    		shopcar();
    		navList();
    		navRight();
    		banner();
    		headlines_transform();
    		brandImg();
    		HotDeals();
    		API();
    		
    	})()
    }
})