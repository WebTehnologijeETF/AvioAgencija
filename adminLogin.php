<?php
    session_start();
    if(isset($_SESSION['username'])) {
        header("location: adminPanel.php");
    }
?>
<!DOCTYPE HTML>
<HTML>
    <HEAD>
        <TITLE>Air Express</TITLE>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <link rel="stylesheet" type="text/css" href="css/basicstyle.css">
        <script type="text/javascript" src="js/renderPartialViews.js"></script>
        <script type="text/javascript" src="js/avioagency.js"></script>
    </HEAD>
    <BODY> 
        <header id="menuu">
            <ul id="menu">
                <li><a href="#" onclick="loadWelcome()"><img class="logo" src="img/logoo.png" alt="#"></a></li>
                <li><a href="#" onclick="loadWelcome()" class="agency-name">Air Express</a></li>
                <li><a href="adminLogin.php" class="registracija">Login</a></li>
                <li><a href="#" onclick="loadContactForm()" class="item">Kontakt</a></li>
                <?php
                    if(isset($_SESSION['username']))
                        echo '<li><a href="#" onclick="loadHotels()" class="item">Hoteli</a></li>';
                    else{
                        echo '<li><a href="#" onclick="loadPartners()" class="item">Partneri</a></li>
                              <li><a href="#" onclick="loadTable()" class="item">Letovi</a></li>';
                        //echo '<li><a href="#" onclick="loadHotels()" class="item">Hoteli</a></li>';
                    }
                ?>
                <li><a href="#" onclick="loadNewsService()" class="item">Novosti</a></li>
                <li><a href="#" class="item" onmouseover="OtvoriMeni('sub-menu')">Poslovnice</a>
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
            <br><br><br><br><br>
            <div class="kontakt-forma">
                <h2 class="login-header">Administratorska login forma!</h2>   
                <br>
                <form class="login-form" action="validateCredentials.php" method="POST">
                    <div>
                        <label class="contact-label">Username :</label>
                        <input id="username" type="text" name="username" class="login-input" placeholder="Unesite ime i prezime">
                    </div>
                    <br><br>
                    <div>
                        <label for="emailC" class="contact-label">Šifra :</label>
                        <input id="sifra" type="password" name="sifra" class="login-input" placeholder="*********">
                    </div>
                    <br><br><br>
                    <div>
                        <input id="prijava" type="submit" name="prijava" class="login-button" value="Prijavite se">   
                    </div>
                    <p>Niste registrovani? <a href='#' onclick='loadRegisterForm()'>Registrujte se!</a></p>
                    <p>Zaboravili ste sifru? <a href='#' onclick='loadRetrievePass()'>Kliknite ovdje za reset!</a></p>
                </form>
            </div>    
        </div>

        <footer>
            <p>Copyright 2015 Emir Đenašević</p>
            <p>emir.dj93@gmail.com</p>
            <p><a href='adminLogin.php'>Administracija</a></p>
        </footer>
    </BODY>
</HTML>