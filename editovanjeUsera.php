<br><br><br><br><br>
<?php
	session_start();
	$idUsera = $_POST['idUsera'];
	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $rezultat = $veza->prepare("SELECT id, username, password, imePrezime, email  
    						  FROM korisnici WHERE id=:userId");
    $rezultat->bindValue(":userId", $idUsera, PDO::PARAM_INT);
    $rezultat->execute();

    foreach($rezultat as $korisnik){
    	$username=$korisnik['username'];
    	$imePrezime=$korisnik['imePrezime'];
    	$email=$korisnik['email'];
    	$sifra=$korisnik['password'];
    }
    echo '<p class="info-small">Izmijeni korisnika (prođite kroz svako polje zbog validacije, na taj način će se i dugme aktivirati)</p><br>';
    echo '<form id="addUser" class="register-form" action="#" method="post" enctype="multipart/form-data">
  			<input style="display:none" id="idUsera" name="idUsera" value="'.$idUsera.'"></input>
	  		<label for="imePrezime" class="register-label">Ime i Prezime :</label>
	  		<input id="imePrezime" type="text" name="imePrezime" class="contact-input" value="'.$imePrezime.'">
	  		<div id="imePrezimeErrorProvider">
	  			&nbsp;&nbsp;
	  		</div>
	  		<br><br>

	        <label for="username" class="register-label">Korisničko ime (username) :</label>
	        <input id="username" type="text" name="username" class="register-input" value="'.$username.'">
	        <div id="usernameErrorProvider">
	        	&nbsp;&nbsp;
	        </div>
	        <br><br>

	        <label for="email" class="register-label">Email :</label>
	        <input id="email" type="email" name="email" class="register-input" value="'.$email.'">
	        <div id="emailErrorProvider">
	        	&nbsp;&nbsp;
	        </div>
	        <br><br>

	        <label for="sifra" class="register-label">Šifra :</label>
	        <input id="sifra" type="password" name="password" class="register-input">
	        <div id="sifraErrorProvider">
	        	&nbsp;&nbsp;
	        </div>
	        <br><br>

	        <label for="potvrdiSifru" class="register-label">Potvrdite šifru :</label>
	        <input id="potvrdiSifru" type="password" class="register-input">
			<div id="potvrdiSifruErrorProvider">
	        	&nbsp;&nbsp;
	        </div>

	        <br><br>
	        <!--input type="submit" class="register-button">Registruj!</input-->
			<button id="registruj" class="register-button" name="registruj" onclick="createUser()" type="button">Potvrdi</button>
	     </form>';
?>