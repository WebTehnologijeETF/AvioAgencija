d<!DOCTYPE HTML>
<HTML>
	<HEAD>
		<TITLE>Kontaktirajte nas!</TITLE>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" type="text/css" href="css/basicstyle.css">
	</HEAD>
	<BODY> 
		<?php
        	$flag = true;
        	$errorMail = $errorSadrzaj = $errorImePrezime = $errorFace = $errorTel = "";
        	$imgMail = $imgSadrzaj = $imgTel = $imgFace = $imgSadrzaj = "";
        	$imePrezime = $telefon = $sadrzaj = $faceUrl = $email = "";

        	if($_SERVER["REQUEST_METHOD"] == "POST")
        	{
        		$fbUrlCheck = '/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/';
				$secondCheck = '/home((\/)?\.[a-zA-Z0-9])?/';
				$faceUrl=$_POST['faceurl'];

				$telRegex = '/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{3})$/';

        		$is_alpha_space = ctype_alpha(str_replace(' ', '', $_POST['imePrezime']));

        		if (trim($_POST["email"]) == '') {
	                $errorMail = "Morate ispuniti ovo polje";
	                $imgMail = "img/brisanje.png";
	                $flag = false;
	            }
	            elseif(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
	                $errorMail = "Mora biti validan mail!";
	                $imgMail = "img/brisanje.png";
	                $flag = false;
	            } 
	            else {
	                $imgMail = "img/zad_ok.png";
	            }

	            if (trim($_POST["imePrezime"]) == '') {
	                $errorImePrezime = "Morate ispuniti ovo polje!";
	                $imgImePrezime = "img/brisanje.png";
	                $flag = false;
	            }
	            elseif(!$is_alpha_space) {
	                $errorImePrezime = "Ime i prezime moze sadrzavati samo slova!";
	                $imgImePrezime = "img/brisanje.png";
	                $flag = false;
	            } 
	            else {
	                $imgImePrezime = "img/zad_ok.png";
	            }

	            if (trim($_POST["faceurl"])=='') {
	            	$errorFace = "Morate ispuniti ovo polje!";
	            	$imgFace="img/brisanje.png";
	            	$flag=false;
	            }
	            elseif(preg_match($fbUrlCheck, $faceUrl) == 1 && preg_match($secondCheck, $faceUrl) == 0) {
	            	$imgFace = "img/zad_ok.png";
	            } 
	            else {
	            	$errorFace = "Nije validan format fb url-a!";
	            	$imgFace = "img/brisanje.png";
	            	$flag = false;
	            }

	            if(trim($_POST['telefon'])=='') {
	            	$errorTel = "Morate ispuniti ovo polje!";
	            	$imgTel = "img/brisanje.png";
	            	$flag = false;
	            }
	            elseif(preg_match($telRegex, $_POST['telefon'])==1) {
	            	$imgTel = "img/zad_ok.png";
	            }
	            else {
	            	$errorTel = "Nije ispravan format telefona (Ispravni formati (061)-123-123, 061123123, 061-123-123";
	            	$imgTel = "img/brisanje.png";
	            	$flag = false;
	            }


	            if(trim($_POST['sadrzaj'])=='') {
	            	$errorSadrzaj = "Morate ispuniti ovo polje";
	            	$imgSadrzaj = "img/brisanje.png";
	            	$flag = false;
	            }
	            else {
	            	$imgSadrzaj = "img/zad_ok.png";
	            }

	            $imePrezime = $_POST['imePrezime'];
	            $email = $_POST['email'];
	            $telefon = $_POST['telefon'];
	            $faceUrl = $_POST['faceurl'];
	            $sadrzaj = $_POST['sadrzaj'];
	            $pbr = $_POST['pbr'];
	            $grad = $_POST['grad'];
        	} 
        	else
        	{
        		//Ovdje bi trebalo aktivirati error providere koji vec postoje (Greska: "Nisu popunjeni svi podaci.")
        		//Sprijecavanje slanja forme.
        		//Otvaranje stranice sa prikazom popunjenih podataka...
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
		<div id="injectView"></div>
		<div id="sakrij">
			<br><br><br>
			<div class="kontakt-forma">
				<p class="info">Za sva pitanja, sugestije i kritike, možete nam se obratiti putem ove kontakt forme!</p>
				<h2 class="contact-header">Kontaktirajte nas!</h2>   
				<?php
	                if($flag) {
	                    print("<br>");
	                    print("<h4>Provjerite da li ste ispravno popunili kontakt formu:</h4>");
	                    print("<ul id = 'uneseni_podaci'>
	                        <li><p>Ime i prezime: ".$imePrezime."</li>
	                        <li><p>E-mail: ".$email."</p></li>
	                        <li><p>Face url: ".$faceUrl."</p></li>
	                        <li><p>Grad: ".$grad."</p></li>
	                        <li><p>Postanski broj: ".$pbr."</p></li>
	                        <li><p>Telefon: ".$telefon."</p></li>
	                        <li><p>Sadrzaj: ".$sadrzaj."</p></li>
	                        </ul>");
	                    print("<h4>Da li ste sigurni da želite poslati ove podatke?</h4>");
	                    print("<form class='contact-form' action='posaljiMail.php' method='POST'>
	                    	<input name='imePrezime' style='display: none;' value='".$imePrezime."'>
	                    	<input name='email' style='display: none;' value='".$email."'>
	                    	<input name='faceurl' style='display: none;' value='".$faceUrl."'>
	                    	<input name='pbr' style='display: none;' value='".$pbr."'>
	                    	<input name='grad' style='display: none;' value='".$grad."'>
	                    	<input name='telefon' style='display: none;' value='".$telefon."'>
	                    	<input name='sadrzaj' style='display: none;' value='".$sadrzaj."'>
	                        <input class='contact-button' type='submit' value='Siguran'></form>");
	                    print("<h4>Ako ste pogrešno popunili formu, možete ispod prepraviti unesene podatke.</h4>");
	                }
	            ?>
		        <form class="contact-form" action="phpcontact.php" method="POST">
		      
		            <label for="imePrezimeC" class="contact-label">Ime i prezime :</label>
		            <input id="imePrezimeC" type="text" name="imePrezime" class="contact-input" 
		            		value="<?php echo $imePrezime; ?>"	placeholder="Unesite ime i prezime">
		            <div id="imePrezimeErrorProviderC">
		            	&nbsp;&nbsp;
		            	<?php print("<img src=".($imgImePrezime)." alt='#'>".$errorImePrezime); ?>
		            </div>
		            <br><br>
		            
		            <label for="emailC" class="contact-label">Email :</label>
		            <input id="emailC" type="email" name="email" class="contact-input"
		            		value="<?php echo $email ?>">
		            <div id="emailErrorProviderC">
		            	&nbsp;&nbsp;
		            	<?php print("<img src=".($imgMail)." alt='#'>".$errorMail); ?>
		            </div>
		            <br><br>
		            
		            <label for="urlC" class="contact-label">Url :</label>
		            <input id="urlC" type="url" name="faceurl" class="contact-input" placeholder="Unesite url vašeg fb profila"
		            		value="<?php echo $faceUrl ?>">
		            <div id="urlErrorProviderC">
		            	&nbsp;&nbsp;
		            	<?php print("<img src=".($imgFace)." alt='#'>".$errorFace); ?>
		            </div>
		            <br><br>

		            <label for="pbrC" class="contact-label">Postanski Broj :</label>
				    <input id="pbrC" type="text" name="pbr" class="contact-input" placeholder="Unesite općinu">
				    <div id="pbrErrorProviderC">
				    	&nbsp;&nbsp;
				    </div>
				    <br><br>

				    <label for="gradC" class="contact-label">Grad :</label>
				    <input id="gradC" type="text" name="grad" class="contact-input" placeholder="Unesite grad">
				    <div id="gradErrorProviderC">
				    	&nbsp;&nbsp;
				    </div>
				    <br><br>
				    
		            <label for="telC" class="contact-label">Tel :</label>
		            <input id="telC" type="tel" name="telefon" class="contact-input" placeholder="Unesite vaš broj telefona"
		            		value="<?php echo $telefon ?>">
		            <div id="telErrorProviderC">
		            	&nbsp;&nbsp;
		            	<?php print("<img src=".($imgTel)." alt='#'>".$errorTel); ?>
		            </div>
		            <br><br><br>
		            
		            <div>	
		              <label for="contentC" class="contact-label">Sadržaj :</label>
		              <textarea id="contentC" class="contact-textarea" name="sadrzaj" rows="10" cols="10" placeholder="Unesite 			pitanje" >
		              	<?php echo trim($sadrzaj) ?>
		              </textarea>
		              <div id="contentErrorProviderC">
		              	&nbsp;&nbsp;
		              	<?php print("<img src=".($imgSadrzaj)." alt='#'>".$errorSadrzaj); ?>
		              </div>
		              <br><br><br><br><br><br><br><br>
		              <button id="posaljiC" class="contact-button" name="dodaj" onclick="provjeraPodataka()" type="submit">Pošaljite</button>
		            </div>
		        </form>
		        
	        </div>
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