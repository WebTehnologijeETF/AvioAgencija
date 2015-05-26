<br><br><br>
<div id="sadrzaj-novosti">
<link rel="stylesheet" type="text/css" href="css/basicstyle.css">
<?php
	
	$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $rezultat = $veza->query("SELECT id, UNIX_TIMESTAMP(datum) datum2, naslov, autor, slika, sadrzaj, detaljno  
    						    FROM novosti ORDER BY datum DESC");

    foreach($rezultat as $novost){
    	$datum = date("d:m:Y (h:i)", $novost['datum2']);
		echo '<div class="novost">
				<div class="novost-head">
					<div class="novost-datum">'.htmlspecialchars(trim($datum), ENT_QUOTES, 'UTF-8').'</div>
					<div class="novost-naslov"><h3>'.htmlspecialchars(trim($novost['naslov']), ENT_QUOTES, 'UTF-8').'</h3> </div>
					<div class="novost-autor"><h5>'.htmlspecialchars(trim($novost['autor']), ENT_QUOTES, 'UTF-8').'</h5></div>
				</div>
				<div class="novost-body">
					<div class = "novost-slika">';
						if(trim($novost['slika'])!=null)
		echo			'<img src="'.htmlspecialchars(trim($novost['slika']), ENT_QUOTES, 'UTF-8').'" alt="#">';
		echo		'</div>
					<div class="novost-sadrzaj"> 
						<p>'.trim($novost['sadrzaj']).'</p>';
						if($novost['detaljno']!=null) 
		echo           "<p class='detaljnije'>
							<a href=\"#\" onclick=\"return loadFullNews('".htmlspecialchars(trim($datum), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($novost['naslov']), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($novost['autor']), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($novost['slika']), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($novost['sadrzaj']), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($novost['detaljno']), ENT_QUOTES, 'UTF-8')."')\">
								Detaljnije...
							</a>
						</p>";
		echo		'</div>
				</div>
			</div>
			<br>
			';
	}
?>
</div>