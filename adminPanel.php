<?php
    session_start();
    if(!isset($_SESSION['username'])) header("location: adminLogin.php")
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
                <?php
                    if(isset($_SESSION['username'])){
                        echo "<li><a href='logout.php' class='registracija'>Logout ".$_SESSION['username']."</a></li>";
                        echo "<li><a href='adminPanel.php' class='registracija'>Admin Panel</a></li>";
                    }
                    else
                        echo "<li><a href='adminLogin.php' class='registracija'>Login</a></li>";
                ?>
                <li><a href="#" onclick="loadUsers()" class="item">Korisnici</a></li>
                <li><a href="#" onclick="loadNewsService()" class="item">Novosti</a></li>
                <li><a href="#" onclick="loadHotels()" class="item">Hoteli</a></li>
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

        <div id="sakrij">
            <br><br><br><br><br>
            <div class="admin">
                <a href="#" class="abutton" onclick="loadNews()">Pregled novosti (editovanje i brisanje)</a><br><br>
                <a href="#" class="abutton" onclick="addNews()">Dodaj novu novost</a><br><br>
                <a href="#" class="abutton" onclick="loadUsers()">Pregled korisnika (editovanje i brisanje)</a><br><br>
                <a href="#" class="abutton" onclick="addUser()">Dodaj novog korisnika</a>
            </div>
        </div>

        <div id="injectView">
            <br><br><br><br><br>    
        </div>
        <footer>
            <p>Copyright 2015 Emir Đenašević</p>
            <p>emir.dj93@gmail.com</p>
            <p><a href='adminLogin.php'>Administracija</a></p>
        </footer>
    </BODY>
</HTML>