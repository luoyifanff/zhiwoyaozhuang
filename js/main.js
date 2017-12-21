	
require(['config','public','index','register','login','detail','cart'],function(){
//	require(['jquery'],function(){
	try{
		var user = JSON.parse(cookie.getcookie('user'));
	}catch(err){
		console.log(err)
	}
	
	console.log(user)
		if(user){
		
			$('#top .left .login').html('欢迎你，用户'+user.username);
		}
//	})
})