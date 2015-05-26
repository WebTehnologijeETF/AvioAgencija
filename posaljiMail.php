<!DOCTYPE HTML>
<HTML>
	<HEAD>
		<TITLE>Kontaktirajte nas!</TITLE>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" type="text/css" href="css/basicstyle.css">
	</HEAD>
	<BODY> 
		<?php
			require('sendgrid-php/sendgrid-php.php');
			ini_set('display_errors', 'On');
			error_reporting(E_ALL);
			if($_POST) {
				if(!isset($_POST['email']) || !isset($_POST['sadrzaj'])) {
					header("location: ../index.html?greska=Nedostaju parametri!");
				}
				else {
					$imePrezime = $_POST['imePrezime'];
					$emailAA = $_POST['email'];
					$sadrzaj = $_POST['sadrzaj'];
					$grad = $_POST['grad'];
					$pbr = $_POST['pbr'];
					$telefon = $_POST['telefon'];
					$faceurl= $_POST['faceurl'];

					if(!filter_var($emailAA, FILTER_VALIDATE_EMAIL)) {
						header("location: ../index.html?greska=Email nije validan");
					}
					else if(strlen($sadrzaj) == 0) {
						header("location: ../index.html?greska=Poruka je prazna");
					}
					else {
						$eol = PHP_EOL;
						$message = "Ime i prezime: ".$imePrezime."\r\n"."Email: ".$emailAA."\r\n"."Grad: ".$grad."\r\n"."Poštanski broj: ".$pbr."\r\n"."Facebook URL: ".$faceurl."\r\n"."Telefon: ".$telefon."\r\n"."\r\n"."\r\n".$sadrzaj;
                        

						$service_plan_id = "sendgrid_04e63"; // your OpenShift Service Plan ID
						$account_info = json_decode(getenv($service_plan_id), true);

						$sendgrid = new SendGrid($account_info['username'], $account_info['password']);
						$email    = new SendGrid\Email();

						$email->addTo("emir.dj93@gmail.com")
							  ->addCc("vljubovic@etf.unsa.ba")
						      ->setReplyTo($emailAA)
						      ->setFrom($emailAA)
						      ->setSubject("Kontakt forma message")
						      ->setText($message);

						try
						{
							$sendgrid->send($email);
							echo '<script>alert("Mail uspješno poslan! Hvala što ste nas kontaktirali");</script>';
							header("location: ../index.html");
						}
						catch (\SendGrid\Exception $e)
						{
							echo $e->getCode();
						    foreach($e->getErrors() as $er) {
						        echo $er;
    						}
						}
			          	/*$eol = PHP_EOL;
			          	$from = $email;
			          	$subject = "Kontakt forma message";

			          	/*komentar*/

			          	/*$separator = md5(time());

			          	// glavni headeri
			          	$headers  = "From: ".$from.$eol;
			          	$headers .= "Reply-To: ".$from.$eol;
			          	$headers .= "MIME-Version: 1.0".$eol;
			          	$headers .= "Cc: vljubovic@etf.unsa.ba".$eol;
			          	$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"".$eol.$eol;
			          	$headers .= "Content-Transfer-Encoding: 7bit".$eol;
			          	$headers .= "This is a MIME encoded message.".$eol.$eol;

			          	// message
			          	$headers .= "--".$separator.$eol;
			          	$headers .= "Content-Type: text/html; charset=\"UTF-8\"".$eol;
			          	$headers .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
			          	$headers .= $message.$eol.$eol;		

			          	// send message
			          	//mail("emir.dj93@gmail.com ", $subject, "", $headers);
			          	*/
					}
				}
			}
		?>
		<header id="menuu">
			<ul id="menu">
				<li><a href="#" onclick="loadNews()"><img class="logo" src="img/logoo.png" alt="#"></a></li>
				<li><a href="#" onclick="loadNews()" class="agency-name">Air Express</a></li>
				<li><a href="#" onclick="loadRegisterForm()" class="registracija">Registracija</a></li>
				<li><a href="#" onclick="loadContactForm()" class="item">Contact</a></li>
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