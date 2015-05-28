<?php
	session_start();
    session_unset();
    //session_destroy();
	echo "doso ovdje";
	header("location: adminLogin.php");
?>