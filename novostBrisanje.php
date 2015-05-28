<br><br><br><br><br>
<?php
	$idNovosti = $_POST['idNovosti'];
	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");

    $komentari = $veza->prepare("SELECT count(*) FROM komentari WHERE novost=:novostId");
    $komentari->bindValue(":novostId", $idNovosti, PDO::PARAM_INT);
    $komentari->execute();
    $brojKomentara=$komentari->fetchColumn();
    if($brojKomentara!=0){
    	echo "<p class='info-small'>Novost se ne može obrisati, molimo prvo izbrišite sve komentare!</p>";	
    	echo "<p class='info-small'><a href='#' onclick=\"deleteAllComments('".$idNovosti."')\">Obriši sve komentare</a></p>";
    }
    else{
    	$rezultat = $veza->query("DELETE FROM novosti WHERE id='".$idNovosti."' ");
    	echo "<p class='info-small'>Novost uspješno obrisana</p>";
    }
    echo "<p class='info-small'><a href='#' onclick = \"loadNews()\">Nazad</a></p>";
?>