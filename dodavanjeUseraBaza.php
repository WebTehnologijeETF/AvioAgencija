<br><br><br><br><br>
<?php
	session_start();
	$imePrezime = htmlspecialchars($_POST['imePrezime'], ENT_QUOTES);
	$username = htmlspecialchars($_POST['username'], ENT_QUOTES);
	$email = htmlspecialchars($_POST['email'], ENT_QUOTES);
	$sifra = htmlspecialchars($_POST['sifra'], ENT_QUOTES);
	$sifra = md5($sifra);

	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");

    $provjeraUsera = $veza->prepare("SELECT count(*) FROM korisnici WHERE username=?");
    $provjeraUsera->execute(array($username));
    $brojUsera = $provjeraUsera->fetchColumn();

    if($brojUsera==0){

	    if($_POST['idUsera']=="foo"){
		    $rezultat = $veza->query("INSERT INTO korisnici (imePrezime, email, username, password) 
		        VALUES ('".htmlspecialchars($imePrezime, ENT_QUOTES)."', '".htmlspecialchars($email, ENT_QUOTES)."', 
		        		'".htmlspecialchars($username, ENT_QUOTES)."', '".htmlspecialchars($sifra, ENT_QUOTES)."') ");
			echo "<p class='info-small'>Korisnik uspješno dodan.</p><br>";
		}

		else{
			$idUsera = $_POST['idUsera'];
			$rezultat = $veza->prepare("UPDATE korisnici SET imePrezime='".htmlspecialchars($imePrezime, ENT_QUOTES)."', email='"
										.htmlspecialchars($email, ENT_QUOTES)."', 
										username='".htmlspecialchars($username, ENT_QUOTES)."', password='"
										.htmlspecialchars($sifra, ENT_QUOTES)."' WHERE id=:userId");
			$rezultat->bindValue(":userId", $idUsera, PDO::PARAM_INT);
	    	$rezultat->execute();

			echo "<p class='info-small'>Korisnik uspješno izmijenjen.</p><br>";
		}
		if(isset($_SESSION['username'])) echo "<p class='info-small'><a href='#' onclick=\"loadUsers()\">Nazad</a></p>";
		else{
			header("location: adminLogin.php");
		}
	}
	else{
		echo "<p class='info-small'>Korisnik već postoji u bazi</p>";
		echo "<p class='info-small'><a href='#' onclick='loadRegisterForm()'>Nazad na registraciju</a></p>";
	}

?>