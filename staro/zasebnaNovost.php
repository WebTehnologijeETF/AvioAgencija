<br><br><br>
<div id="sadrzaj-novosti">
<?php
		
		$datum = $_POST['date'];
		$naslov = $_POST['heading'];
		$autor = $_POST['newsAutor'];
		$slika = $_POST['img'];
		$sadrzajNovosti = $_POST['contentNews'];
		$detaljnijeNovosti = $_POST['detailNews'];

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
						</div>
						';
		echo		'</div>
				</div>
			 </div>
			 <br>
			 ';
?>
</div>