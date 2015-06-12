<br><br><br><br><br>
<?php
	session_start();
?>
<p class="info-small">Dodaj novost</p><br>
<form id="addNews" class="register-form" action="#" method="post" enctype="multipart/form-data">
	<label for="autor" class="register-label">Autor :</label>
	<input id="autor" type="text" name="autor" class="contact-input">
	<div id="autorErrorProvider">
		&nbsp;&nbsp;
	</div>
	<br><br>

	<label for="naslov" class="register-label">Naslov :</label>
	<input id="naslov" type="text" name="naslov" class="register-input">
	<div id="naslovErrorProvider">
		&nbsp;&nbsp;
	</div>
	<br><br>

	<label for="slika" class="register-label">Slika :</label>
	<input id="slika" type="text" name="slika" class="register-input">
	<div id="slikaErrorProvider">
		&nbsp;&nbsp;
	</div>
	<br><br>

	<label for="sadrzaj" class="contact-label">Sadržaj :</label>
	<textarea id="sadrzaj" name="sadrzaj" class="contact-textarea" rows="10" cols="10"></textarea>
	<div id="sadrzajErrorProvider">
		&nbsp;&nbsp;
	</div>
	<br><br><br><br><br><br><br><br>

	<label for="detaljno" class="contact-label">Detaljni opis :</label>
	<textarea id="detaljno" name="detaljno" class="contact-textarea" rows="10" cols="10"></textarea>
	<div id="detaljnoErrorProvider">
		&nbsp;&nbsp;
	</div>

	<br><br><br><br><br><br><br><br>

	<button id="registruj" class="register-button" name="registruj" onclick="createNews('false')" type="button">Dodaj novost</button>
</form>