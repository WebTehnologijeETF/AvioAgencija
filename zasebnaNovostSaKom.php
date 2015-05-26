<br><br><br>
<div id="sadrzaj-novosti">
<?php
	$novostId=$_POST['idNovosti'];

	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $novost = $veza->prepare("SELECT id, UNIX_TIMESTAMP(datum) datum2, naslov, autor, slika, sadrzaj, detaljno  
    						  FROM novosti 
    						  WHERE id=?
    						  ORDER BY datum2 desc");
    $novost->execute(array($novostId));

    $komentari = $veza->prepare("SELECT autor, UNIX_TIMESTAMP(datum) datum2, email, tekst FROM komentari WHERE novost=? ORDER BY datum asc");
    $komentari->execute(array($novostId));
    
    $naslov=""; $autor=""; $datum=""; $slika=""; $sadrzajNovosti=""; $detaljnijeNovosti="";
    foreach($novost as $record){
    	$naslov = $record['naslov'];
    	$autor = $record['autor'];
    	$datum = date("d:m:Y (h:i)", $record['datum2']);
    	$slika = $record['slika'];
    	$sadrzajNovosti = $record['sadrzaj'];
    	$detaljnijeNovosti = $record['detaljno'];
    }

    $naslov = ucfirst(strtolower($naslov));

	echo '<div class="novost">
			<div class="novost-head">
				<div class="novost-datum">'.htmlspecialchars(trim($datum),ENT_QUOTES,'UTF-8').'</div>
				<div class="novost-naslov"><h3>'.htmlspecialchars(trim($naslov), ENT_QUOTES, 'UTF-8').'</h3> </div>
				<div class="novost-autor"><h5>'.htmlspecialchars(trim($autor), ENT_QUOTES, 'UTF-8').'</h5></div>
			</div>
			<div class="novost-body">
				<div class = "novost-slika">';	
					if(trim($slika)!="")
	echo			'<img src="'.htmlspecialchars(trim($slika), ENT_QUOTES, 'UTF-8').'" alt="#">';
	echo		'</div>
				<div class="novost-sadrzaj"> 
					<p>'.htmlspecialchars(trim($sadrzajNovosti), ENT_QUOTES, 'UTF-8').'</p>';
					if($detaljnijeNovosti!="") 
	echo           '<br>
					<div class="novost-sadrzaj">
						<h5>Detaljniji opis novosti:</h5>
						<p>'.htmlspecialchars(trim($detaljnijeNovosti), ENT_QUOTES, 'UTF-8').'</p>
					</div>';
	echo 			'<div style="padding-left:30px; max-width:400px"><h4>Komentari:</h4>';
					foreach($komentari as $komentar){
						$komentarVrijeme=date("d:m:Y (h:i:s)", $komentar['datum2']);
	echo 				"<small style='float:left'>".htmlentities($komentar['autor'], ENT_QUOTES)."</small><br>".
						"<small style='float:left'>".htmlentities($komentar['email'], ENT_QUOTES)."</small>".
              			"<small style='float:right; padding-right:1px'>".htmlentities($komentarVrijeme, ENT_QUOTES)."</small>".
             			"<br><p>'".htmlspecialchars($komentar['tekst'], ENT_QUOTES)."'</p><br>";				
					} 			
		    
	echo   			   "<h5>Dodaj komentar:</h5>
		                <form id='komentarForma' method='POST' action='dodajKomentar.php'>
		                  <div>
		                    <label>Autor:</label><br>
		                    <input type='text' name='autorKomentara' placeholder='Unesite vase ime' style='width: 400px'>  
		                  </div>
		                  <div>
		                    <label>Email:</label><br>
		                    <input type='text' name='emailAutora' placeholder='Unesite vas email' style='width: 400px'>  
		                  </div>
		                  <br>
		                  <input name='novostId' style='display: none' value='".$novostId."'>
		                  <div>
		                    <label>Komentar:</label><br>
		                    <textarea name='tekstKomentara' rows='4' cols='55'></textarea>
		                  </div>

		                  <br>
		                  <input class = 'contact-button' type='button' value='Pošalji komentar' onclick=\"return insertComment()\">
		                </form>
	                </div>
	            </div>
	        </div>
	    </div>";
?>
</div>