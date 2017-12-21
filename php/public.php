<?php
	header('content-type:text/html;charset=utf-8');
	$connect = @mysql_connect('localhost','root','950814') or die("数据库连接错误".mysql_error());//@:容错，阻止数据库报错 die：抛错。  mysql_error()：获取数据库报错
	mysql_select_db('zhiwo',$connect) or die("该库不存在".mysql_error());
	mysql_query('SET NAMES UTF8');//设置客户端字符集	
?>