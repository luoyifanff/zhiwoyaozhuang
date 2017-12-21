define(['jquery'],function($){
	var str = window.location.search;
	var sid = str.split('=')[1];
	$.ajax({
		type:"get",
		url:"php/detail.php",
		data:{
			sid:sid
		},	
		dataType:'json'	
	}).done(function(data){
		console.log(data)
		$('.detailInfo img').attr('src',data.url);
		$('.detailInfo .price i').html(data.price);
		$('.detailInfo .num u').html(data.people);
		$('.lujin i').html(data.title);
	})

})	