<br><br><br><br><br>
<?php
	//require('sendgrid-php/sendgrid-php.php');
	$username = htmlspecialchars($_POST['username'], ENT_QUOTES , 'UTF-8');
	
	$alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    $pass = array(); 
    $alphaLength = strlen($alphabet) - 1;
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }

    $sifraBezHash=implode("", $pass);
    $sifra=md5($sifraBezHash);
    $veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
    $veza->exec("set names utf8");
    $rezultat = $veza->prepare("UPDATE korisnici SET password='".$sifra."' WHERE username=?");
    $rezultat->execute(array($username));

    $user = $veza->prepare("SELECT email FROM korisnici WHERE username=?");
    $user->execute(array($username));

    foreach($user as $korisnik){
    	$email=$korisnik['email'];
    }

    //$eol = PHP_EOL;
	$message = "Nova šifra: ".$sifraBezHash;
    
	/*$service_plan_id = "sendgrid_04e63"; // your OpenShift Service Plan ID
	$account_info = json_decode(getenv($service_plan_id), true);

	$sendgrid = new SendGrid($account_info['username'], $account_info['password']);
	$email    = new SendGrid\Email();

	$email->addTo($email)
	      ->setFrom("noreply@airexpress.com")
	      ->setSubject("Nova šifra")
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
	}*/
  	$eol = PHP_EOL;
  	$from = "noreply@airexpress.com";
  	$subject = "Nova šifra";

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
  	mail($email, $subject, "", $headers);
  	

?>