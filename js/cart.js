define(['jquery'],function($){

	//阻止快速点击数量按钮时文字变成蓝底
	$('.gamount').on('selectstart',function(){
		return false;
	})
	
	//取得cookie
	var obj = JSON.parse(cookie.getcookie('goods'));
	var totalmoney=0;
	//思路：先请求表中所有数据，然后筛选出在首页点击的商品来渲染页面
	$.ajax({
		url:"php/cart.php",			
		dataType:'json',
		aasync:true
	}).done(function(data){
		var num=0; //记录循环了几次
		for(var item in obj){		
			var $clone =$('.goodslist li:hidden').clone(true);
			$clone.attr('class','clone');
			for(var i=0;i<data.length;i++){
				if(data[i].sid == item){
					num++;					
					$('.goodslist').append($clone);
					$clone.show();
					//给图片上添加一个自定义属性，把当前的item赋值给它
					$clone.find('img').attr({'src':data[i].url,'data-which':item});
					$clone.find('.gname a').html(data[i].title);
					$clone.find('.gprice span').html(data[i].price);
					$clone.find('input').val(obj[item]);

					//初始化获得每件商品的小计、积分
					var eachprice = data[i].price * obj[item];
					$('.goodslist .gmoney').eq(num).find('span').html(eachprice.toFixed(2));
					$('.goodslist .gintegral').eq(num).find('span').html(eachprice.toFixed(2));
					$('.gpay .totalmoney i').html(num);
				}
			}
			//获得初始总价
			totalmoney += eachprice;
			$('.gpay .totalmoney u').html(totalmoney);
		}
		
		//点进购物车判断此时是否是空的商品列表，空的话就显示购物车为空的提示
		if($('.goodslist li:not(:hidden)').length ===0){
			$('#emp').show();
		}
		if($('#emp').is(':hidden')){
		$('.gpay').show();
		}else{
			$('.gpay').hide();
		}
	})
	
	$('.goodslist .gamount').find('.numadd').click(function(){
						
		var $val = $(this).siblings('input').val();
		$val++;
		$(this).siblings('input').val($val);
		
		//更新cookie
		var $cookieId = $(this).parents('li').find('img').attr('data-which');
		obj[$cookieId] = $val;
		cookie.setcookie('goods',obj,7);
		
		//更新小计、积分、总价
		var $money = $(this).siblings('input').val() * $(this).parents('li').find('.gprice span').html();
		$(this).parents('li').find('.gmoney span').html($money.toFixed(2));			
		var $integral = $money;
		$(this).parents('li').find('.gintegral span').html($integral.toFixed(2));
		totalmoney += Number($(this).parents('li').find('.gprice span').html());
		$('.gpay .totalmoney u').html(totalmoney.toFixed(2));

	})
	
	$('.goodslist .gamount').find('.numdown').click(function(){
		
		var $val = $(this).siblings('input').val();
		$val--;
		//商品数量不能小于1
		if($val<=1){
			$val=1;
		}else{	
			$(this).siblings('input').val($val);
			
			var $cookieId = $(this).parents('li').find('img').attr('data-which');
			obj[$cookieId] = $val;
			cookie.setcookie('goods',obj,7);
			
			var $money = $(this).siblings('input').val() * $(this).parents('li').find('.gprice span').html();
			$(this).parents('li').find('.gmoney span').html($money.toFixed(2));		
			var $integral = $money;
			$(this).parents('li').find('.gintegral span').html($integral.toFixed(2));
			totalmoney -= Number($(this).parents('li').find('.gprice span').html());
			$('.gpay .totalmoney u').html(totalmoney.toFixed(2));
		}
	})
	
	$('.goodslist .gdone').find('.goodDelete').click(function(){		
		//删除当前商品
		$(this).parents('li').remove();
				
		//删除当前商品在cookie里的记录		
		for(attrr in obj){			
			if(attrr==$(this).parents('li').find('img').attr('data-which')){
				delete obj[attrr];
				cookie.setcookie('goods',obj,7);
				break;
			}			
		}
		if($('.goodslist li:not(:hidden)').length ===0){
			$('#emp').show();
			$('.gpay').hide();
		}
		//更新商品个数
		var numb = Number($('.gpay .totalmoney i').html());
		console.log(numb)
		numb--;
		$('.gpay .totalmoney i').html(numb);
		
		//更新总价
		var $deletemoney = $(this).parent().siblings('.gmoney').find('span').html();
		var deletemoney = Number($deletemoney);
		totalmoney -= deletemoney;
		//console.
		$('.gpay .totalmoney u').html(totalmoney.toFixed(2));
	})
	//全部清空
	$('.gpay .cleargoods span').on('click',function(){	
		$('.goodslist').hide();
		$('#emp').show();
		$('.gpay').hide();		
		cookie.deletecookie('goods');
	})
	//继续购物
	$('.gpay .cleargoods a').on("click",function(){
		window.location.assign('index.html');
	})
})	