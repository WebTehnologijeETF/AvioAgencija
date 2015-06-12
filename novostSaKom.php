<br><br><br>
<div id="sadrzaj-novosti">
<?php
	session_start();
	$novostId=$_POST['idNovosti'];

	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $novost = $veza->prepare("SELECT id, UNIX_TIMESTAMP(datum) datum2, naslov, autor, slika, sadrzaj, detaljno  
    						  FROM novosti 
    						  WHERE id=?
    						  ORDER BY datum2 desc");
    $novost->execute(array($novostId));

    $komentari = $veza->prepare("SELECT id, autor, UNIX_TIMESTAMP(datum) datum2, email, tekst FROM komentari WHERE novost=? ORDER BY datum asc");
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
						if($komentar['autor']!='Anonimus' && $komentar['email'])
	echo 				"<small style='float:left'><a href='mailto:".$komentar['email']."'> ".htmlentities($komentar['autor'], ENT_QUOTES)."</a></small><br>";
						else
	echo  				"<small style='float:left'>".htmlentities($komentar['autor'], ENT_QUOTES)."</small><br>";
	echo				"<small style='float:left'>".htmlentities($komentar['email'], ENT_QUOTES)."</small>";
						if(isset($_SESSION['username']))
	echo 					"<small style='float:right; padding-right:1px'><a href='#' onclick=\"deleteComment('".$komentar['id']."')\">Obriši komentar</a></small><br>";
    echo          		"<small style='float:right; padding-right:1px; padding-bottom:10px'>".htmlentities($komentarVrijeme, ENT_QUOTES)."</small>".
             			"<br><p>'".htmlspecialchars($komentar['tekst'], ENT_QUOTES)."'</p><br><br>";				
					} 			
		    
	echo   			   "<h5>Dodaj komentar: (prođite kroz svako polje zbog validacije, na taj način će se i dugme aktivirati)</h5>
		                <form id='komentarForma' method='POST' action='dodajKomentar.php'>
		                  
		                  <label for='autorN'>Autor:</label><br>
		                  <input id='autorN' type='text' name='autorKomentara' placeholder='Unesite vase ime' style='width: 400px'>  
		                  
		                  <br><br>
		                  <label for='emailN'>Email:</label><br>
		                  <input id='emailN' type='text' name='emailAutora' placeholder='Unesite vas email' style='width: 400px'>  
		                  
		                  <div id='emailErrorProviderN'>
					       	&nbsp;&nbsp;
					      </div>
					      
					      <br><br>
		                  <input name='novostId' style='display: none' value='".$novostId."'>
		                   
		                  <label>Komentar:</label><br>
		                  <textarea id='tekstN' name='tekstKomentara' rows='4' cols='55'></textarea>
		                  <div id='tekstErrorProviderN'>
					       	&nbsp;&nbsp;
					      </div><br><br><br>
		                  <br>
		                  <input id='registruj' class = 'contact-button' type='button' value='Pošalji komentar' onclick=\"return insertComment()\">
		                </form>
	                </div>
	            </div>
	        </div>
	    </div>";
?>
</div>