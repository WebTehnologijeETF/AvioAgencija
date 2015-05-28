<br><br><br><br><br>
<?php
	$idNovosti = $_POST['idNovosti'];
	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $rezultat = $veza->query("DELETE FROM komentari WHERE novost='".$idNovosti."' ");
    echo "<p class='info-small'>Komentari uspješno obrisani</p>";
    echo "<p class='info-small'><a href='#' onclick = \"loadNews()\">Nazad</a></p>";
?>