<br><br><br><br><br>
<?php 
		
	echo '<p class="info-small">Dodaj novog korisnika</p><br>';
	echo '<form id="addUser" class="register-form" action="#" method="post" enctype="multipart/form-data">
	  		<label for="imePrezime" class="register-label">Ime i Prezime :</label>
	  		<input id="imePrezime" type="text" name="imePrezime" class="contact-input">
	  		<div id="imePrezimeErrorProvider">
	  			&nbsp;&nbsp;
	  		</div>
	  		<br><br>

	        <label for="username" class="register-label">Korisničko ime (username) :</label>
	        <input id="username" type="text" name="username" class="register-input">
	        <div id="usernameErrorProvider">
	        	&nbsp;&nbsp;
	        </div>
	        <br><br>

	        <label for="email" class="register-label">Email :</label>
	        <input id="email" type="email" name="email" class="register-input">
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