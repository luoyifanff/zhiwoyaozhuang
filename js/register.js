
define(['jquery'],function($){
	var codeStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var $str='';
	function init(){
		$('.box .bottom li').css('background','url(img/other_autoico.png) no-repeat');
		var $li = $('.box .bottom li');
		$li.eq(1).css('background-position-y','-30px');
		$li.eq(2).css('background-position-y','-60px');
		$li.eq(3).css('background-position-y','-90px');
		$li.eq(4).css('background-position-y','-120px');
		$li.eq(5).css('background-position-y','-180px');
		$li.eq(6).css('background-position-y','-210px');		
		$('.box').find('p').not('.xieyi').hide();
		$('.box').find('input').not('[type="submit"]').val("");		
		for(var $i=0;$i<4;$i++){
			var $ran = getRandom(0,61);
			$str += codeStr.charAt($ran);
		}
		$('.box .code').find('div').html($str);
	}
	
	function check(){
		//$('.box .center').find('input[type="submit"]').prop('disabled',true);
		var $input = $('.box .center').find('input');
		var $p = $('.box .center').find('p');
		$input.eq(0).blur(function(){
			var $reg = /^1(3|5|7|8)\d{9}$/;		
			if($input.eq(0).val()==''){
				$(this).siblings('p').show();
				$p.eq(0).html('手机不能为空');
			}else if(!$reg.test($input.eq(0).val())){
				$(this).siblings('p').show();
				$p.eq(0).html('手机格式有误，请重新输入');
			}else{
				ajax({
					type:'post',
					url:'php/register.php',
					data:{ //发送到后端的数据
						username:$('.box .center input').eq(0).val()
					},
					success:function(data){
						
						if(data){
							$('.box .center p').eq(0).show();
							$('.box .center p').eq(0).html('用户名已经存在');							
						}else{
							$('.box .center').find('input[type="submit"]').prop('disabled',false);
							$('.box .center p').eq(0).hide();
						}
					},
					error:function(e){
						alert(e);
					}
				});
			}
		})
		
		$input.eq(1).blur(function(){
			var $reg = /.{6,16}/;		
			if($input.eq(1).val()==''){
				$(this).siblings('p').show();
				$p.eq(1).html('密码不能为空');
			}else if(!$reg.test($input.eq(1).val())){
				$(this).siblings('p').show();
				$p.eq(1).html('密码长度需6-16位字符');
			}else{
				$('.box .center p').eq(1).hide();
			}
		})
	
		$input.eq(2).blur(function(){
			var $reg = $input.eq(1).val();		
			if($input.eq(2).val()==''){
				$(this).siblings('p').show();
				$p.eq(2).html('请重复密码');
			}else if($input.eq(2).val()!=$reg){
				$(this).siblings('p').show();
				$p.eq(2).html('两次输入密码不同');
			}else{
				$(this).siblings('p').hide();
			}
		})
		
		//更换验证码
		$('.box .code').find('span').on('click',function(){
			$str='';
			for(var $i=0;$i<4;$i++){
				var $ran = getRandom(0,61);
				$str += codeStr.charAt($ran);
			}
			$('.box .code').find('div').html($str);		
		})
			
		//校验验证码是否正确
		$input.eq(3).blur(function(){
			var $reg = $('.box .code').find('div').html();
			if($input.eq(3).val()==''){
				$(this).siblings('p').show();
				$p.eq(3).html('验证码不能为空');
			}else if($input.eq(3).val().toLowerCase()==$reg.toLowerCase()){
				$(this).siblings('p').hide();
			}else{
				$(this).siblings('p').show();
				$p.eq(3).html('验证码有误,请重新输入');	
			}
		})
		
		$input.eq(4).click(function(){
			
			if($('.box .center input').eq(0).val()!='' && $('.box .center input').eq(1).val()!='' &&$('.box .center input').eq(2).val()!=''&&$('.box .center input').eq(3).val()!=''){
				if($('.box .center p').eq(0).is(':hidden') && $('.box .center p').eq(1).is(':hidden') &&$('.box .center p').eq(2).is(':hidden')&&$('.box .center p').eq(3).is(':hidden')){
					//递交表单
					//$('.box .center').find('input[type="submit"]').prop('disabled',false);
					
						ajax({
							type:'post',
							url:'php/register.php',
							data:{ //发送到后端的数据
								username:$('.box .center input').eq(0).val(),
								password:$('.box .center input').eq(1).val(),
								submit:true
							},
							success:function(data){
								console.log(data)
								if(data==='insertsuccess'){
									window.location.assign('index.html');
								}
							}
						})					
			    }			
			}
		})
		
	}
	
	function getRandom(n,m) {
		n = Number(n); 
		m = Number(m);
		if(n > m) { 
			var $temp = n;
			n = m;
			m = $temp;
		}
		return Math.round(Math.random() * (m - n) + n); 
	}
	
	
	return {
		init:init(),
		check:check()
	}
	
	
})