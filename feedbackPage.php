<br><br><br><br><br>
<?php
	session_start();
	if(isset($_GET['dodavanje'])){
		echo "<p class='info-small'>Novost uspješno dodana.</p><br>";
	}
	else if(isset($_GET['promjena'])){
		echo "<p class='info-small'>Novost uspješno izmijenjena.</p><br>";
	}
	echo "<p class='info-small'><a href='#' onclick=\"loadNews()\">Nazad</a></p>";
?>