var sadrzajNovosti=document.getElementById("sadrzaj-novosti");
var novost, novostHead, novostNaslov, novostBody, 
novostSlika, novostSadrzaj, paragraf, slika, naslov,
obrisi, promijeni;

var nazivTb = document.getElementById("nazivHotela");
var opisHotelaTb = document.getElementById("opisHotela");
var urlSlikeTb = document.getElementById("urlHotela");
var button = document.getElementById("registrujHotel");

button.disabled= true;
button.style.backgroundColor="grey";

window.onload = function() {
	//loadAllHotels();
}

function loadAllHotels(){
	xhr=new XMLHttpRequest();

	xhr.onreadystatechange=function(event)
	{
		if(xmlhttp.status === 200 & xmlhttp.readyState === 4) 
		{
			var hoteli = JSON.parse(xhr.responseText);
			fillHotelsList(hoteli);
			event.preventDefault();
		}
	}
	xmlhttp.open("GET","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16260", true);
	xmlhttp.send();
}

function fillHotelsList(hoteli)
{
	for (var i = 0; i<hoteli.length; i++){
		createElements();
		slika.setAttribute("src", hoteli[i].url);
		slika.setAttribute("alt", "#");
		naslov.innerHTML=hoteli[i].naziv;
		paragraf.innerHTML=hoteli[i].opis;
	}
}

function createHotel(){
	var forma = document.getElementsByClassName("register-form")[0];
	
	var hotel = {
		naziv: forma.nazivHotela.value,
		opis: forma.opisHotela.value,
		url: "www.avioexpress.ba"
	}; 

	if (document.getElementsByClassName("OK").length === 3){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
	 		if(xhr.status === 200 & xhr.readyState === 4) {
	 			alert("Bravo!");
	   			loadAllHotels();
	   			//event.preventDefault();
	  		}
	 	}
		
		xhr.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16260", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("akcija=dodavanje" + "&brindexa=16260&proizvod=" + JSON.stringify(hotel));
	}
}

function updateHotel(){
	var forma = document.getElementsByClassName("register-form")[0];
	
	var hotel = {
		id: forma.idHotela.value,
		naziv: forma.nazivHotela.value,
		opis: forma.opisHotela.value,
		url: "www.avioexpress.ba"
	}; 

	if (document.getElementsByClassName("OK").length === 3){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
	 		if(xhr.status === 200 & xhr.readyState === 4) {
	 			alert("Bravo!");
	   			loadAllHotels();
	   			//event.preventDefault();
	  		}
	 	}
		
		xhr.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16260", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("akcija=promjena" + "&brindexa=16260&proizvod=" + JSON.stringify(hotel));
	}
}

function deleteHotel(){
	var forma = document.getElementsByClassName("register-form")[0];
	var hotel = {
		id: forma.idHotela.value
	};

	if(document.getElementsByClassName("OK").length === 3) {
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
	 		if(xhr.status === 200 & xhr.readyState === 4) {
	 			alert("Bravo!");
	   			loadAllHotels();
	   			//event.preventDefault();
	  		}
	 	}
		
		xhr.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16260", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("akcija=brisanje" + "&brindexa=16260&proizvod=" + JSON.stringify(hotel));
	}
}

function createElements()
{
	novost = document.createElement("div");
	novostHead= document.createElement("div");
	novostNaslov = document.createElement("div");
	novostBody = document.createElement("div");
	novostSlika = document.createElement("div");
	novostSadrzaj = document.createElement("div");
	paragraf = document.createElement("p");
	slika = document.createElement("img");
	naslov = document.createElement("h3");
	obrisi = document.createElement("button");
	promijeni = document.createElement("button");

	novost.setAttribute("class", "novost");
	novostHead.setAttribute("class", "novost-head");
	novostNaslov.setAttribute("class", "novost-naslov");
	novostBody.setAttribute("class", "novost-body");
	novostSadrzaj.setAttribute("class" ,"novost-sadrzaj");
	novostSlika.setAttribute("class", "novost-slika");
	slika.setAttribute("src", "img/coding-future.jpg");
	slika.setAttribute("alt", "#");
	obrisi.setAttribute("class", "hotelButton");
	obrisi.setAttribute("onclick", "deleteHotel('this.id')");
	promijeni.setAttribute("class", "hotelButton");
	promijeni.setAttribute("onclick", "updateHotel('this.id')");
	obrisi.innerHTML="Obriši";
	promijeni.innerHTML="Promijeni";

	sadrzajNovosti.appendChild(novost);
	novost.appendChild(novostHead);
	novostHead.appendChild(novostNaslov);
	novostNaslov.appendChild(naslov);
	novost.appendChild(novostBody);
	novostBody.appendChild(novostSlika);
	novostBody.appendChild(novostSadrzaj);
	novostSlika.appendChild(slika);
	novostSadrzaj.appendChild(paragraf);
	novostSadrzaj.appendChild(promijeni);
	novostSadrzaj.appendChild(obrisi);
}

function addAlert(id, url, error) {
    var div = document.getElementById(id);
    if(div.childNodes[1]!==undefined){
    	if(div.childNodes[2]!==undefined){
    		div.removeChild(div.childNodes[2]);
    	}
    	div.removeChild(div.childNodes[1]);
    }
    if(error===''){
    	div.setAttribute('class', 'OK');
    }
    else{
    	div.setAttribute('class', 'notOK');
    	button.style.backgroundColor="grey";
    }
    var newContent = document.createElement("img");
	newContent.setAttribute('src', url);
	var errorText = document.createTextNode(error);
	div.appendChild(newContent);
	div.appendChild(errorText);
}

function provjeriValidaciju() {
    if (document.getElementsByClassName("OK").length === 3) {
        button.disabled = false;
        button.style.backgroundColor="rgb(30, 81, 128)";
    } else {
        button.disabled = true;
    }
};

var samoSlova = function(content){
	for(i=0; i<content.length; i++){
        if(content[i]===' ') continue;
		if (content[i].toLowerCase()<'a' || content[i].toLowerCase()>'z'){
			return false;
		}
	}
	return true;
};

urlSlikeTb.addEventListener("blur", function(){
	var url = urlSlikeTb.value;
	if (url !==''){
		if(url.length<1){
			urlSlikeTb.style.backgroundColor="#FF8080";
			addAlert('urlHotelaErrorProvider', 'img/brisanje.png', 'Morate unijeti neki sadržaj!');
			urlSlikeTb.focus();
		}
		else{
			addAlert('urlHotelaErrorProvider', 'img/zad_ok.png', '');
			urlSlikeTb.style.backgroundColor="#80FF80";
		}
	}
	else{
		addAlert("urlHotelaErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		urlSlikeTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
}); 

nazivTb.addEventListener("blur", function(){
	var naziv = nazivTb.value;
	if (naziv !==''){
		if(naziv.length<1){
			nazivTb.style.backgroundColor="#FF8080";
			addAlert('nazivHotelaErrorProvider', 'img/brisanje.png', 'Morate unijeti neki sadržaj!');
			nazivTb.focus();
		}
		else{
			addAlert('nazivHotelaErrorProvider', 'img/zad_ok.png', '');
			nazivTb.style.backgroundColor="#80FF80";
		}
	}
	else{
		addAlert("nazivHotelaErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		nazivTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

opisHotelaTb.addEventListener("blur", function(){
	var opis = opisHotelaTb.value;
	if (opis !==''){
		if(opis.length<1){
			opisHotelaTb.style.backgroundColor="#FF8080";
			addAlert('opisHotelaErrorProvider', 'img/brisanje.png', 'Morate unijeti neki sadržaj!');
			opisHotelaTb.focus();
		}
		else{
			addAlert('opisHotelaErrorProvider', 'img/zad_ok.png', '');
			opisHotelaTb.style.backgroundColor="#80FF80";
		}
	}
	else{
		addAlert("opisHotelaErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		opisHotelaTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

