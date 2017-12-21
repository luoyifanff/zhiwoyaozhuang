<?php
	require 'public.php';
	if(isset($_POST['username'])){//判断用户名存在
		$name=@$_POST['username'];//防止报错		
	}else{
		//exit('非法登录');
	}
	
	
	
	$query="select * from register where username='$name'";	
	$result=mysql_query($query);

	$arr = mysql_fetch_array($result);//mysql_fetch_array执行完一条会指向下一条，此时下一条为undefined
	//print_r($arr['password']);
	//print_r(md5($password));
	if($result){	//存在该记录
		if(isset($_POST['password'])){
			$password=@$_POST['password'];
			if(md5($password) == $arr['password']){
				print_r(json_encode($arr));
			}else{
				echo false;
			}		
		}		
	}else{
		//echo 11111111;
		echo false;//没有该记录
	}
?>