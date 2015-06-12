<br><br><br><br>
<?php
	session_start();
	if(isset($_SESSION['username']))
		echo "<input id='adminNovosti' style='display:none' value='admin'>";
	else
		echo "<input id='adminNovosti' style='display:none' value='korisnik'>";
?>
<div id="sadrzaj-novosti">
	
</div>