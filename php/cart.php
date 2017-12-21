<?php
	require 'public.php';
	//$sid = $_GET['sid'];
	$query = "select * from hotdeals";
	
	$result = mysql_query($query);//执行
	
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i] = mysql_fetch_array($result,MYSQL_ASSOC);
	}
	

	echo json_encode($arr);
?>