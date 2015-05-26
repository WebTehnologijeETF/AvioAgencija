<br><br><br>
<div>
<?php 
      $veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
      $veza->exec("set names utf8");
      
      $novostId=$_POST['idNovosti'];
      $autorKomentara=htmlentities(trim($_POST['autor']), ENT_QUOTES, 'UTF-8');
      $tekstKomentara=htmlentities(trim($_POST['tekst']), ENT_QUOTES, 'UTF-8');
      $emailAutora=htmlentities(trim($_POST['email']), ENT_QUOTES, 'UTF-8');

      if(str_replace(' ', '', $autorKomentara)=="") $autorKomentara="Anonimus";
 
      $rezultat = $veza->query("INSERT INTO komentari (novost, autor, tekst, email, datum) 
        VALUES ('".$novostId."', '".htmlentities($autorKomentara, ENT_QUOTES)."', '".htmlentities($tekstKomentara, ENT_QUOTES)."', 
                                 '".htmlentities($emailAutora, ENT_QUOTES)."', NOW())");

      if (!$rezultat) {
          $greska = $veza->errorInfo();
          print "SQL greška: " . $greska[2];
          exit();
      }
      //header("location: http://localhost/Tutorijal%208/t8z3.php");
  ?>

</div>