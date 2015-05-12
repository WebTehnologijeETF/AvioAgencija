<!DOCTYPE HTML>
<HTML>
	<HEAD>
		<TITLE>Kontaktirajte nas!</TITLE>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" type="text/css" href="css/basicstyle.css">
	</HEAD>
	<BODY> 
		<?php
			ini_set('display_errors', 'On');
			error_reporting(E_ALL);
			if($_POST) {
				if(!isset($_POST['email']) || !isset($_POST['sadrzaj'])) {
					header("location: ../index.html?stranica=kontakt&greska=Nedostaju parametri!");
				}
				else {
					$email = $_POST['email'];
					$sadrzaj = $_POST['sadrzaj'];

					if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
						header("location: ../index.html?stranica=kontakt&greska=Email nije validan");
					}
					else if(strlen($sadrzaj) == 0) {
						header("location: ../index.html?stranica=kontakt&greska=Poruka je prazna");
					}
					else {
						//send mail
						$message = "Ime i prezime: ".$imePrezime."<br/>Email: ".$email."<br/><br/>".$sadrzaj;
                        $message = nl2br($message);

			          	$eol = PHP_EOL;
			          	$from = "noreply@webtehnologije.ba";
			          	$subject = "Kontakt forma message";

			          	/*komentar*/

			          	$separator = md5(time());

			          	// glavni headeri
			          	$headers  = "From: ".$from.$eol;
			          	$headers .= "Reply-To: ".$from.$eol;
			          	$headers .= "MIME-Version: 1.0".$eol;
			          	$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"".$eol.$eol;
			          	$headers .= "Content-Transfer-Encoding: 7bit".$eol;
			          	$headers .= "This is a MIME encoded message.".$eol.$eol;

			          	// message
			          	$headers .= "--".$separator.$eol;
			          	$headers .= "Content-Type: text/html; charset=\"UTF-8\"".$eol;
			          	$headers .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
			          	$headers .= $message.$eol.$eol;		

			          	// send message
			          	mail("emir.dj93@gmail.com ", $subject, "", $headers);
			          	echo '<script>alert("Sent!");</script>';
					}
				}
			}
		?>
		<header id="menuu">
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
		<div id="injectView">
			
		</div>
		<footer>
			<p>Copyright 2015 Emir Đenašević</p>
			<p>emir.dj93@gmail.com</p>
		</footer>
		<script type="text/javascript" src="js/avioagency.js"></script>
		<!--script type="text/javascript" src="js/validateCForm.js"></script-->
		<script type="text/javascript" src="js/renderPartialViews.js"></script>
	</BODY>
</HTML>