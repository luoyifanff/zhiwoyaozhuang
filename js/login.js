define(['jquery'],function($){
	var codeStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var $str='';
	function init(){
		$('.box-login .bottom li').css('background','url(img/other_autoico.png) no-repeat');
		var $li = $('.box-login .bottom li');
		$li.eq(1).css('background-position-y','-30px');
		$li.eq(2).css('background-position-y','-60px');
		$li.eq(3).css('background-position-y','-90px');
		$li.eq(4).css('background-position-y','-120px');
		$li.eq(5).css('background-position-y','-180px');
		$li.eq(6).css('background-position-y','-210px');
		
		$('.box-login').find('input[type="text"]').val('');
		$('.box-login').find('input[name="password"]').val('');
		for(var $i=0;$i<4;$i++){
			var $ran = getRandom(0,61);
			$str += codeStr.charAt($ran);
		}
		$('.box-login .code-login').find('div').html($str);
		
		try{
			var obj = JSON.parse(cookie.getcookie('user'));
		}catch(e){
			
		}

		if(obj){
			
			$('.username-login input').val(obj.username);
			$('.password-login input').val(obj.psw);
		}
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
	//更换验证码
	$('.box-login .code-login').find('span').on('click',function(){
		$str='';
		for(var $i=0;$i<4;$i++){
			var $ran = getRandom(0,61);
			$str += codeStr.charAt($ran);
		}
		$('.box-login .code-login').find('div').html($str);		
	})
		
	var login = function(){
		var $input = $('.box-login .center-login').find('input');
		var $codetip = $('.center-login .password-login p');
		var $p = $('.box-login .center-login').find('p');
	
		//获取checkbox的状态（布尔类型）
		var $auto;
		$('.autologin input').on('click',function(){
			$auto = $(this).is(function(){
				if($(this).prop('checked')){
					return true;
				}else{
					return false;
				}
			})
			//console.log($auto)
		})
	
		$('.sub-login').click(function(){
			//校验验证码是否正确			
			var $reg = $('.box-login .code-login').find('div').html();
			if($input.eq(2).val()==''){				
				$codetip.html('验证码不能为空').css('color','red');
				$codetip.show();
			}else if($input.eq(2).val().toLowerCase()!=$reg.toLowerCase()){				
				$codetip.html('验证码有误').css('color','red');
				$codetip.show();
			}else{
				$codetip.hide();
				ajax({
					type:'post',
					url:'php/login.php',
					data:{
						username:$input.eq(0).val(),
						password:$input.eq(1).val()
					},
					success:function(data){
						if(data){
							//成功匹配之后判断用户是否需要存cookie，然后再跳转到首页
							if($auto){
								var userinfo = {};
								userinfo.username = $('.username-login input').val();								
								userinfo.psw = $('.password-login input').val();
								
								cookie.setcookie('user',userinfo,7);								
							}		
							window.location.assign('index.html');
						}else{
							$p.eq(0).show();						
						}
					}
				})
			}
			

		})
	}
	
	return {
		init:init(),
		login:login()
	}
})