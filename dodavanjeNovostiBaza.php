<br><br><br><br><br>
<?php
	session_start();
	$autor = htmlspecialchars($_POST['autor'], ENT_QUOTES);
	$naslov = htmlspecialchars($_POST['naslov'], ENT_QUOTES);
	$slika = htmlspecialchars($_POST['slika'], ENT_QUOTES);
	$sadrzaj = htmlspecialchars($_POST['sadrzaj'], ENT_QUOTES);
	$detaljnije = htmlspecialchars($_POST['detaljno'], ENT_QUOTES);

	if($slika=="") $slika=null;
	if($detaljnije=="") $detaljnije=null;
 
	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");

    if($_POST['idNovosti']=="foo"){
	    $rezultat = $veza->query("INSERT INTO novosti (autor, naslov, slika, sadrzaj, detaljno, datum) 
	        VALUES ('".htmlspecialchars($autor, ENT_QUOTES)."', '".htmlspecialchars($naslov, ENT_QUOTES)."', 
	        		'".htmlspecialchars($slika, ENT_QUOTES)."', '".htmlspecialchars($sadrzaj, ENT_QUOTES)."',
	        		'".htmlspecialchars($detaljnije, ENT_QUOTES)."', NOW()) ");
		echo "<p class='info-small'>Novost uspješno dodana.</p><br>";
	}

	else{
		$idNovosti = $_POST['idNovosti'];
		$rezultat = $veza->prepare("UPDATE novosti SET autor='".htmlspecialchars($autor, ENT_QUOTES)."', naslov='"
									.htmlspecialchars($naslov, ENT_QUOTES)."', 
									slika='".htmlspecialchars($slika, ENT_QUOTES)."', sadrzaj='"
									.htmlspecialchars($sadrzaj, ENT_QUOTES)."', detaljno='"
									.htmlspecialchars($detaljnije, ENT_QUOTES)."' WHERE id=:novostId");
		$rezultat->bindValue(":novostId", $idNovosti, PDO::PARAM_INT);
    	$rezultat->execute();

		echo "<p class='info-small'>Novost uspješno izmijenjena.</p><br>";
	}
	if(isset($_SESSION['username'])) echo "<p class='info-small'><a href='#' onclick=\"loadNews()\">Nazad</a></p>";
	else{
		header("location: adminLogin.php");
	}

?>