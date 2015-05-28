<br><br><br><br><br>
<div>
<?php 
      session_start();
      if(isset($_SESSION['username'])){
        echo "sta?";
        $username=$_SESSION['username'];
      }
      else if(isset($_REQUEST['username']) && isset($_REQUEST['sifra'])){
        echo "kako?<br>";
        $username = $_REQUEST['username'];
        $konekcija = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
        $konekcija->exec("set names utf8");
        $credentials = $konekcija->prepare("SELECT username, password, email, imePrezime FROM korisnici WHERE username=?");
        $credentials->execute(array($username));
        foreach($credentials as $parametar){
          $password=$parametar['password'];
          $email=$parametar['email'];
          $imePrezime=$parametar['imePrezime'];
        }
        if ($password==md5($_REQUEST['sifra'])){
           $_SESSION['username']=$username;
           $_SESSION['email']=$email;
           $_SESSION['imePrezime']=$imePrezime;
           header("location: adminPanel.php");
        }
        else{
          header("location: adminLogin.php");
        }
      }
  ?>
</div>