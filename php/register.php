<?php
	require 'public.php';

	if(isset($_POST['username'])){//判断用户名存在
		$name=@$_POST['username'];//防止报错
	}else{
		exit('非法登录');
	}
	
	$query="select * from register where username='$name'";
	$result=mysql_query($query);//如果用户名存在，有记录集存在。
	
	if(mysql_fetch_array($result)){
		echo true;//有重复
	}else{
		echo false;//没有重复
	}
	
	if(isset($_POST['submit'])){//是否点击注册按钮
		$name=$_POST['username'];//username:表单的名称
		$pass=md5($_POST['password']);
		
		$query="insert register values(null,'$name','$pass',NOW())";
		mysql_query($query);
		echo 'insertsuccess';
		//header('location:login.html');//跳转到登录页面
	}
?>