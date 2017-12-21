<?php
	require 'public.php';
	$sid = $_GET['sid'];
	$query = "select * from hotdeals where sid='$sid'";
	$result = mysql_query($query);
	
	
	$arr = mysql_fetch_array($result);

	echo json_encode($arr);
?>