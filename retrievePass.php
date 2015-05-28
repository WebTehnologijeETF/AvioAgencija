<br><br><br><br><br>
<?php
	session_start();
	echo '<p class="info-small">Resetovanje passworda</p><br>';
    echo '<form id="generate" class="login-form" action="#" method="post" enctype="multipart/form-data">
	  		<label for="username" class="register-label">Unesite vaš username :</label>
	  		<input id="username" type="text" name="username" class="contact-input">
	  		<br><br><br>
			<button id="registruj" class="register-button" name="registruj" onclick="loadPassGenerator()" type="button">Generiši novi password</button>
	     </form>';
?>