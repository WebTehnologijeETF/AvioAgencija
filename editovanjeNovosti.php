<br><br><br><br><br>
<?php
	session_start();
	$idNovosti = $_POST['idNovosti'];
	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $rezultat = $veza->prepare("SELECT datum, naslov, autor, slika, sadrzaj, detaljno
    						  FROM novosti WHERE id=:newsId");
    $rezultat->bindValue(":newsId", $idNovosti, PDO::PARAM_INT);
    $rezultat->execute();

    foreach($rezultat as $novost){
    	$datum=$novost['datum'];
    	$naslov=$novost['naslov'];
    	$autor=$novost['autor'];
    	$slika=$novost['slika'];
    	$sadrzaj=$novost['sadrzaj'];
    	$detaljno=$novost['detaljno'];
    }
    echo '<p class="info-small">Izmijeni novost (prođite kroz svako polje zbog validacije, na taj način će se i dugme aktivirati)</p><br>';
    echo '<form id="addNews" class="register-form" action="#" method="post" enctype="multipart/form-data">
  			<input style="display:none" id="idNovosti" name="idNovosti" value="'.$idNovosti.'"></input>
	  		<label for="autor" class="register-label">Autor :</label>
	  		<input id="autor" type="text" name="autor" class="contact-input" value="'.$autor.'">
	  		<div id="autorErrorProvider">
	  			&nbsp;&nbsp;
	  		</div>
	  		<br><br>

	        <label for="naslov" class="register-label">Naslov :</label>
	        <input id="naslov" type="text" name="naslov" class="register-input" value="'.$naslov.'">
	        <div id="naslovErrorProvider">
	        	&nbsp;&nbsp;
	        </div>
	        <br><br>

	        <label for="slika" class="register-label">Slika :</label>';
	        if($slika!=null)
	echo    '<input id="slika" type="text" name="slika" class="register-input" value="'.$slika.'">';
			else
	echo 	'<input id="slika" type="text" name="slika" class="register-input">';
	echo    '<div id="slikaErrorProvider">
	        	&nbsp;&nbsp;
	        </div>
	        <br><br>

	        <label for="sadrzaj" class="contact-label">Sadržaj :</label>
            <textarea id="sadrzaj" name="sadrzaj" class="contact-textarea" rows="10" cols="10">'.$sadrzaj.'</textarea>
            <div id="sadrzajErrorProvider">
            	&nbsp;&nbsp;
            </div>
            <br><br><br><br><br><br><br><br>

	        <label for="detaljno" class="contact-label">Detaljni opis :</label>';
	        if($detaljno!=null)
    echo    '<textarea id="detaljno" name="detaljno" class="contact-textarea" rows="10" cols="10">'.$detaljno.'</textarea>';
			else
	echo 	'<textarea id="detaljno" name="detaljno" class="contact-textarea" rows="10" cols="10">'.$detaljno.'</textarea>';
    echo    '<div id="detaljnoErrorProvider">
            	&nbsp;&nbsp;
            </div>

	        <br><br><br><br><br><br><br><br>

			<button id="registruj" class="register-button" name="registruj" onclick="createNews()" type="button">Izmijeni novost</button>
	     </form>';
?>