<?php
	require 'public.php';
	$query = 'select * from bannerimg';//选择要检索的内容
	$result = mysql_query($query);//执行
	$arr = array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i] = mysql_fetch_array($result);
	}	
	echo json_encode($arr);
?>