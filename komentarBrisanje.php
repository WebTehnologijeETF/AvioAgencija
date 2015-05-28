<br><br><br><br><br>
<?php
	$idKomentara = $_POST['idKomentara'];
	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $rezultat = $veza->query("DELETE FROM komentari WHERE id='".$idKomentara."' ");
    echo "<p class='info-small'>Komentar uspješno obrisan</p>";
    echo "<p class='info-small'><a href='#' onclick = \"loadNews()\">Nazad</a></p>";
?>