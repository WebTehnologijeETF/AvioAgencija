<br><br><br><br><br>
<div>
	<div class="putovanja">
			<p class="info">Administratori:</p>
			<table class="tabela">
				<tr>
					<th>ID</th>
					<th>Ime i Prezime</th>
					<th>Email</th>
					<th>Username</th>
					<th></th>
					<th></th>
				</tr>
				<?php
					session_start();
					$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
				    $veza->exec("set names utf8");
				    $rezultat = $veza->query("SELECT id, imePrezime, username, email  
				    						  FROM korisnici");

				    foreach ($rezultat as $korisnik){
				    	if($_SESSION['username']!=$korisnik['username'])
				    	echo "<tr>
				    			<td>".$korisnik['id']."</td>
				    			<td>".$korisnik['imePrezime']."</td>
				    			<td>".$korisnik['email']."</td>
				    			<td>".$korisnik['username']."</td>
				    			<td><a href='#' onclick=\"return editUser('".$korisnik['id']."') \">Izmijeni korisnika</a></td>
				    			<td><a href='#' onclick=\"return deleteUser('".$korisnik['id']."')\">Obriši korisnika</a></td>
				    	";
				    }
				?>
			</table>
		</div>
</div>