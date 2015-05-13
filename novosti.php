<!DOCTYPE HTML>
<HTML>
	<HEAD>
		<TITLE>Novosti</TITLE>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" type="text/css" href="css/basicstyle.css">
        <script type="text/javascript" src="js/renderPartialViews.js"></script>
		<script type="text/javascript" src="js/avioagency.js"></script>
	</HEAD>
	<BODY> 
		<header id="menuu">-
			<ul id="menu">
				<li><a href="#" onclick="loadNews()"><img class="logo" src="img/logoo.png" alt="#"></a></li>
				<li><a href="#" onclick="loadNews()" class="agency-name">Air Express</a></li>
				<li><a href="#" onclick="loadRegisterForm()" class="registracija">Registracija</a></li>
				<li><a href="contact.html" class="item">Contact</a></li>
				<li><a href="#" onclick="loadNews()" class="item">News</a></li>
				<li><a href="#" onclick="loadPartners()" class="item">Partners</a></li>
				<li><a href="#" onclick="loadTable()" class="item">Table View</a></li>
				<li><a href="#" onclick="loadHotels()" class="item">Hoteli</a></li>
				<li><a href="#" class="item" onmouseover="OtvoriMeni('sub-menu')">Podaci o poslovnicama</a>
					<ul id="sub-menu" 
						onmouseover="DrziOtvoren()"
						onmouseout="ZatvoriMeni()">
						<li><a href="#">Poslovnica 1</a></li>
						<li><a href="#">Poslovnica 2</a></li>
						<li><a href="#">Poslovnica 3</a></li>
						<li><a href="#">Poslovnica 4</a></li>
						<li><a href="#">Poslovnica 5</a></li>
					</ul>
				</li>
			</ul>
		</header>
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
		            if ($time2 < $time1) {
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
				echo '<div class="novost">
						<div class="novost-head">
							<div class="novost-datum">'.trim($datum).'</div>
							<div class="novost-naslov"><h3>'.trim($naslov).'</h3> </div>
							<div class="novost-autor"><h5>'.trim($autor).'</h5></div>
						</div>
						<div class="novost-body">
							<div class = "novost-slika">';
								if(trim($slika)!="")
				echo			'<img src="'.trim($slika).'" alt="#">';
				echo		'</div>
							<div class="novost-sadrzaj"> 
								<p>'.trim($sadrzajNovosti).'</p>';
								if($detaljnijeNovosti!="") 
				echo           '<p class="detaljnije"><a href="#" 
									onclick="()">Detaljnije...</a></p>';
				echo		'</div>
						</div>
					</div>
					<br>
					';
				
			}
		?>
		</div>
		
		<footer>
			<p>Copyright 2015 Emir Đenašević</p>
			<p>emir.dj93@gmail.com</p>
		</footer>
	</BODY>
</HTML>