<?php
	session_start();
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
						echo "<li><a href='logout.php' class='registracija'>Logout 	".$_SESSION['username']."</a></li>";
						echo "<li><a href='adminPanel.php' class='registracija'>Admin Panel</a></li>";
					}
					else
						echo "<li><a href='adminLogin.php' class='registracija'>Login</a></li>";
				?>
				<?php
					if(isset($_SESSION['username'])){
						echo '<li><a href="#" onclick="loadHotels()" class="item">Hoteli</a></li>';
						echo '<li><a href="#" onclick="loadUsers()" class="item">Korisnici</a></li>';
					}
					else{
						echo '<li><a href="#" onclick="loadContactForm()" class="item">Kontakt</a></li>';
						echo '<li><a href="#" onclick="loadPartners()" class="item">Partneri</a></li>
							  <li><a href="#" onclick="loadTable()" class="item">Letovi</a></li>';
					}

				?>
				<li><a href="#" onclick="loadNews()" class="item">Novosti</a></li>
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
			<?php
				if(isset($_SESSION['username']))
					echo '<p class= "info">Dobro došli na admin panel!</p>';
				else
					echo '<p class= "info">Dobro došli na web stranicu avio agencije Air Express. Hvala na posjeti!</p>';
			?>
		</div>
		<div id="injectView"></div>

		<footer>
			<p>Copyright 2015 Emir Đenašević</p>
			<p>emir.dj93@gmail.com</p>
			<p><a href='adminLogin.php'>Administracija</a></p>
		</footer>
	</BODY>
</HTML>