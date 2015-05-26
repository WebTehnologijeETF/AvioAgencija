<br><br><br>
<div id="sadrzaj-novosti">
<?php
	$counter=0;
	$novosti = array();
	foreach(glob("novosti/*.txt") as $imeFajla)
	{
		$novosti[$counter] = file($imeFajla);
		$counter++;
	}
	$kolicinaNovosti=count($novosti);

	for ($i=0; $i<$kolicinaNovosti; $i++)
	{
		for ($j=0; $j<$kolicinaNovosti-1-$i; $j++) {
			$time1 = strtotime($novosti[$j][0]); $newformat1 = date('d-m-Y h:i:s',$time1);
			$time2 = strtotime($novosti[$j+1][0]); $newformat2 = date('d-m-Y h:i:s',$time2);
            if ($time2 > $time1) {
                $tmp=$novosti[$j];
                $novosti[$j]=$novosti[$j+1];
                $novosti[$j+1]=$tmp;
            }
        }	
	}

	for ($i=0; $i<$kolicinaNovosti; $i++)
	{
		$novostLength=count($novosti[$i]);
		$sadrzajNovosti=$detaljnijeNovosti="";
		$datum=$novosti[$i][0]; $autor=$novosti[$i][1]; $naslov=$novosti[$i][2]; $slika=$novosti[$i][3];

		$j=4;
		while ($j<$novostLength){
			if (trim($novosti[$i][$j])=="--"){
				for ($k=$j+1; $k<$novostLength; $k++){
					$detaljnijeNovosti.=$novosti[$i][$k];
				}
				break;	
			} 
			$sadrzajNovosti.=$novosti[$i][$j];
			$j++;
		}
		$sadrzajNovosti = trim(preg_replace('/\s+/', ' ', $sadrzajNovosti));
		$detaljnijeNovosti = trim(preg_replace('/\s+/', ' ', $detaljnijeNovosti));
		$naslov = ucfirst(strtolower($naslov));
		echo '<div class="novost">
				<div class="novost-head">
					<div class="novost-datum">'.htmlspecialchars(trim($datum), ENT_QUOTES, 'UTF-8').'</div>
					<div class="novost-naslov"><h3>'.htmlspecialchars(trim($naslov), ENT_QUOTES, 'UTF-8').'</h3> </div>
					<div class="novost-autor"><h5>'.htmlspecialchars(trim($autor), ENT_QUOTES, 'UTF-8').'</h5></div>
				</div>
				<div class="novost-body">
					<div class = "novost-slika">';
						if(trim($slika)!="")
		echo			'<img src="'.htmlspecialchars(trim($slika), ENT_QUOTES, 'UTF-8').'" alt="#">';
		echo		'</div>
					<div class="novost-sadrzaj"> 
						<p>'.trim($sadrzajNovosti).'</p>';
						if($detaljnijeNovosti!="") 
		echo           "<p class='detaljnije'>
							<a href=\"#\" onclick=\"return loadFullNews('".htmlspecialchars(trim($datum), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($naslov), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($autor), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($slika), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($sadrzajNovosti), ENT_QUOTES, 'UTF-8')."','".htmlspecialchars(trim($detaljnijeNovosti), ENT_QUOTES, 'UTF-8')."')\">
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