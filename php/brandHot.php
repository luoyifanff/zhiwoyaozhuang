<?php
	require 'public.php';
	$query = 'select * from brandhot';
	$result = mysql_query($query);
	$arr = array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i] = mysql_fetch_array($result);
	}	
	echo json_encode($arr);
?>