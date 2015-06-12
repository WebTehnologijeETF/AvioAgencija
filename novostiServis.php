<?php
	function zag() {
	    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
	    header('Content-Type: application/json');
	    header('Access-Control-Allow-Origin: *');
	}
	function rest_get($request, $data) { 
		$veza = new PDO('mysql:host=localhost;dbname=spirala5;charset=utf8', 's5user', 's5pass');
		$veza->exec("set names utf8");
		$values = array();
		if(count($data)!==0 && isset($data['id'])){
			$upit = $veza->prepare("SELECT id, naslov, autor, slika, datum, sadrzaj, detaljno FROM novosti
									WHERE id='".$data['id']."' ");
			$upit->execute();
			$result = $upit->fetchAll(PDO::FETCH_ASSOC);
			for($row = 0; $row<count($result); $row++){
				$values[]=array('id'=> $result[$row]['id'],
								 'naslov' => $result[$row]['naslov'],
								 'autor' => $result[$row]['autor'],
								 'slika' => $result[$row]['slika'],
								 'datum' => $result[$row]['datum'],
								 'sadrzaj' => $result[$row]['sadrzaj'],
								 'detaljno' => $result[$row]['detaljno']);
			}
			echo json_encode($values[0]);
			return json_encode($values[0]);
		}
		else if(count($data)===0){
			$upit = $veza->prepare("SELECT id, naslov, autor, slika, datum, sadrzaj, detaljno FROM novosti
									ORDER BY datum DESC");
			$upit->execute();
			$result = $upit->fetchAll(PDO::FETCH_ASSOC);
			for($row = 0; $row<count($result); $row++){	
				$upit2 = $veza->prepare("SELECT count(*) FROM komentari
												 WHERE novost=:id");
				$upit2->bindValue(":id", $result[$row]['id'], PDO::PARAM_INT);
   				$upit2->execute();
   				$brojKomentara=$upit2->fetchColumn();
				if(trim($result[$row]['slika'])!=null && trim($result[$row]['detaljno'])!=null){
					$values[]=array('id'=> $result[$row]['id'],
									 'naslov' => $result[$row]['naslov'],
									 'autor' => $result[$row]['autor'],
									 'slika' => $result[$row]['slika'],
									 'datum' => $result[$row]['datum'],
									 'sadrzaj' => $result[$row]['sadrzaj'],
									 'detaljno' => $result[$row]['detaljno'],
									 'brojKomentara' => $brojKomentara);
				}
				else if(trim($result[$row]['slika'])!=null && trim($result[$row]['detaljno'])==null){
					$values[]=array('id'=> $result[$row]['id'],
									 'naslov' => $result[$row]['naslov'],
									 'autor' => $result[$row]['autor'],
									 'slika' => $result[$row]['slika'],
									 'datum' => $result[$row]['datum'],
									 'sadrzaj' => $result[$row]['sadrzaj'],
									 'detaljno' => 'prazno',
									 'brojKomentara' => $brojKomentara);
				}
				else if(trim($result[$row]['slika'])==null && trim($result[$row]['detaljno'])!=null){
					$values[]=array('id'=> $result[$row]['id'],
									 'naslov' => $result[$row]['naslov'],
									 'autor' => $result[$row]['autor'],
									 'slika' => 'prazno',
									 'datum' => $result[$row]['datum'],
									 'sadrzaj' => $result[$row]['sadrzaj'],
									 'detaljno' => $result[$row]['detaljno'],
									 'brojKomentara' => $brojKomentara);
				}
				else if(trim($result[$row]['slika'])==null && trim($result[$row]['detaljno'])==null){
					$values[]=array('id'=> $result[$row]['id'],
									 'naslov' => $result[$row]['naslov'],
									 'autor' => $result[$row]['autor'],
									 'slika' => 'prazno',
									 'datum' => $result[$row]['datum'],
									 'sadrzaj' => $result[$row]['sadrzaj'],
									 'detaljno' => 'prazno',
									 'brojKomentara' => $brojKomentara);
				}
			}
			echo json_encode($values);
			return json_encode($values);
		}
		else {
			$values[] = array('greska' => 'Neispravni parametri');
			echo json_encode($values[0]);
			return json_encode($values[0]);
		}
		
	}
	function rest_post($request, $data) {
		$autor = htmlspecialchars($data['autor'], ENT_QUOTES);
		$naslov = htmlspecialchars($data['naslov'], ENT_QUOTES);
		$slika = htmlspecialchars($data['slika'], ENT_QUOTES);
		$sadrzaj = htmlspecialchars($data['sadrzaj'], ENT_QUOTES);
		$detaljnije = htmlspecialchars($data['detaljno'], ENT_QUOTES);

		if($slika=="") $slika=null;
		if($detaljnije=="") $detaljnije=null;
	 
		$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
	    $veza->exec("set names utf8");

	    if($data['idNovosti']=="foo"){
		    $rezultat = $veza->query("INSERT INTO novosti (autor, naslov, slika, sadrzaj, detaljno, datum) 
		        VALUES ('".htmlspecialchars($autor, ENT_QUOTES)."', '".htmlspecialchars($naslov, ENT_QUOTES)."', 
		        		'".htmlspecialchars($slika, ENT_QUOTES)."', '".htmlspecialchars($sadrzaj, ENT_QUOTES)."',
		        		'".htmlspecialchars($detaljnije, ENT_QUOTES)."', NOW()) ");
			header("location: feedbackPage.php?dodavanje=1");
			
		}
	}
	function rest_delete($request) { 
		$idNovosti = $request[strlen($request)-1];
		
	}
	function rest_put($request, $data) { 
		$autor = htmlspecialchars($data['autor'], ENT_QUOTES);
		$naslov = htmlspecialchars($data['naslov'], ENT_QUOTES);
		$slika = htmlspecialchars($data['slika'], ENT_QUOTES);
		$sadrzaj = htmlspecialchars($data['sadrzaj'], ENT_QUOTES);
		$detaljnije = htmlspecialchars($data['detaljno'], ENT_QUOTES);

		if($slika=="") $slika=null;
		if($detaljnije=="") $detaljnije=null;
	 
		$veza = new PDO("mysql:dbname=spirala5;host=localhost;charset=utf8", "s5user", "s5pass");
	    $veza->exec("set names utf8");

		$idNovosti = $data['idNovosti'];
		$rezultat = $veza->prepare("UPDATE novosti SET autor='".htmlspecialchars($autor, ENT_QUOTES)."', naslov='"
									.htmlspecialchars($naslov, ENT_QUOTES)."', 
									slika='".htmlspecialchars($slika, ENT_QUOTES)."', sadrzaj='"
									.htmlspecialchars($sadrzaj, ENT_QUOTES)."', detaljno='"
									.htmlspecialchars($detaljnije, ENT_QUOTES)."' WHERE id=:novostId");
		$rezultat->bindValue(":novostId", $idNovosti, PDO::PARAM_INT);
    	$rezultat->execute();
		header("location: feedbackPage.php?promjena=1");
	}
	function rest_error($request) { }

	$method  = $_SERVER['REQUEST_METHOD'];
	$request = $_SERVER['REQUEST_URI'];

	switch($method) {
	    case 'PUT':
	        parse_str(file_get_contents('php://input'), $put_vars);
	        zag(); $data = $put_vars; rest_put($request, $data); break;
	    case 'POST':
	        zag(); $data = $_POST; rest_post($request, $data); break;
	    case 'GET':
	        zag(); $data = $_GET; rest_get($request, $data); break;
	    case 'DELETE':
	        zag(); rest_delete($request); break;
	    default:
	        header("{$_SERVER['SERVER_PROTOCOL']} 404 Not Found");
	        rest_error($request); break;
	}
?>