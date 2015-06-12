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
		if(count($data)!==0 && isset($data['idNovosti'])){
			$upit = $veza->prepare("SELECT id, novost, autor, email, datum, tekst FROM komentari
									WHERE novost=:idNovosti");
			$upit->bindValue(":idNovosti", $data['idNovosti'], PDO::PARAM_INT);
   			$upit->execute();
   			$result = $upit->fetchAll(PDO::FETCH_ASSOC);

			
			$upit2 = $veza->prepare("SELECT id, naslov, autor, slika, datum, sadrzaj, detaljno FROM novosti
									 WHERE id=:idNovosti");
			$upit2->bindValue(":idNovosti", $data['idNovosti'], PDO::PARAM_INT);
    		$upit2->execute();
    		$result2 = $upit2->fetchAll(PDO::FETCH_ASSOC);
    		$values[]=array('idNovosti'=> $result2[0]['id'],
								 'naslovNovosti' => $result2[0]['naslov'],
								 'autorNovosti' => $result2[0]['autor'],
								 'slikaNovosti' => $result2[0]['slika'],
								 'datumNovosti' => $result2[0]['datum'],
								 'sadrzajNovosti' => $result2[0]['sadrzaj'],
								 'detaljnoNovosti' => $result2[0]['detaljno']);

			for($row = 0; $row<count($result); $row++){
				$values[]=array('id'=> $result[$row]['id'],
								 'novost' => $result[$row]['novost'],
								 'autor' => $result[$row]['autor'],
								 'email' => $result[$row]['email'],
								 'datum' => $result[$row]['datum'],
								 'tekst' => $result[$row]['tekst']);
			}
			echo json_encode($values);
			return json_encode($values);
		}
		else if(count($data)===0){
			$upit = $veza->prepare("SELECT id, novost, autor, email, datum, tekst FROM komentari
									ORDER BY datum");
			$upit->execute();
			$result = $upit->fetchAll(PDO::FETCH_ASSOC);
			for($row = 0; $row<count($result); $row++){	
				$values[]=array('id'=> $result[$row]['id'],
								 'novost' => $result[$row]['novost'],
								 'autor' => $result[$row]['autor'],
								 'email' => $result[$row]['email'],
								 'datum' => $result[$row]['datum'],
								 'tekst' => $result[$row]['tekst']);
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
		echo count($data);
	}
	function rest_delete($request) { }
	function rest_put($request, $data) { }
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