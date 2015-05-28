<br><br><br><br><br>
<?php
	$idUsera = $_POST['idUsera'];
	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $rezultat = $veza->query("DELETE FROM korisnici WHERE id='".$idUsera."' ");
    echo "<p class='info-small'>Korisnik uspješno obrisan</p>";
    echo "<p class='info-small'><a href='#' onclick = \"loadUsers()\">Nazad</a></p>";
?>