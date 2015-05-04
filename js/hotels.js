var sadrzajNovosti=document.getElementById("sadrzaj-novosti");
var novost, novostHead, novostNaslov, novostBody, 
novostSlika, novostSadrzaj, paragraf, slika, naslov,
obrisi, promijeni;

var nazivTb = document.getElementById("nazivHotela");
var opisHotelaTb = document.getElementById("opisHotela");
var urlSlikeTb = document.getElementById("urlHotela");
var button = document.getElementById("registrujHotel");
var button2 = document.getElementById("promijeniHotel");

button.disabled= true;
button.style.backgroundColor="grey";
button2.style.display="none";

loadAllHotels();

function loadAllHotels(){
	xhr=new XMLHttpRequest();

	xhr.onreadystatechange=function(event)
	{
		if(xhr.status === 200 & xhr.readyState === 4) 
		{
			var hoteli = JSON.parse(xhr.responseText);
			fillHotelsList(hoteli);
			event.preventDefault();
		}
	}
	xhr.open("GET","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16260", true);
	xhr.send();
}

function fillHotelsList(hoteli)
{
	var myNode = document.getElementById("sadrzaj-novosti");
	while (myNode.firstChild) {
	    myNode.removeChild(myNode.firstChild);
	}
	for (var i = 0; i<hoteli.length; i++)
	{
		createElements();
		slika.setAttribute("src", hoteli[i].slika);
		naslov.innerHTML=hoteli[i].naziv;
		paragraf.innerHTML=hoteli[i].opis;
		obrisi.setAttribute("onclick", "deleteHotel('"+hoteli[i].id+"')");
		promijeni.setAttribute("onclick", "setUpdateHotel('"+hoteli[i].id+"')");
	}
}

function createHotel(){
	var forma = document.getElementsByClassName("register-form")[0];
	
	var hotel = {
		naziv: forma.nazivHotela.value,
		opis: forma.opisHotela.value,
		slika: forma.urlHotela.value
	}; 

	if (document.getElementsByClassName("OK").length === 3){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
	 		if(xhr.status === 200 & xhr.readyState === 4) {
	 			alert("Bravo!");
	 			forma.nazivHotela.value="";
	 			forma.opisHotela.value="";
	 			forma.urlHotela.value="";
				removeErrorProviders("urlHotelaErrorProvider");
				removeErrorProviders("nazivHotelaErrorProvider");
				removeErrorProviders("opisHotelaErrorProvider");
				opisHotelaTb.style.backgroundColor="white";
				nazivTb.style.backgroundColor="white";
				urlSlikeTb.style.backgroundColor="white";
	   			loadAllHotels();
	  		}
	 	}
		
		xhr.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16260", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("akcija=dodavanje" + "&brindexa=16260&proizvod=" + JSON.stringify(hotel));

	}
}

function setUpdateHotel(idHotela){
	var forma = document.getElementsByClassName("register-form")[0];
	
	forma.idHotela.value=idHotela;

	button.style.display="none";
	button2.style.display="block";
	window.scrollTo(0, 0);
}

function updateHotel(){
	var forma = document.getElementsByClassName("register-form")[0];
	
	var hotel = {
		id: forma.idHotela.value,
		naziv: forma.nazivHotela.value,
		opis: forma.opisHotela.value,
		slika: forma.urlHotela.value
	}; 

	if (document.getElementsByClassName("OK").length === 3){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
	 		if(xhr.status === 200 & xhr.readyState === 4) {
	 			alert("Bravo!");	
	 			forma.idHotela.value="";
	 			forma.nazivHotela.value="";
	 			forma.opisHotela.value="";
	 			forma.urlHotela.value="";
	   			button2.style.display="none";
				button.style.display="block";
				removeErrorProviders("urlHotelaErrorProvider");
				removeErrorProviders("nazivHotelaErrorProvider");
				removeErrorProviders("opisHotelaErrorProvider");
				opisHotelaTb.style.backgroundColor="white";
				nazivTb.style.backgroundColor="white";
				urlSlikeTb.style.backgroundColor="white";
	   			loadAllHotels();
	  		}
	 	}
		
		xhr.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16260", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("akcija=promjena" + "&brindexa=16260&proizvod=" + JSON.stringify(hotel));
	}
}

function deleteHotel(idHotela){
	var forma = document.getElementsByClassName("register-form")[0];
	var hotel = {
		id: idHotela
	};

	if(document.getElementsByClassName("OK").length === 3) {
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
	 		if(xhr.status === 200 & xhr.readyState === 4) {
	   			loadAllHotels();
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
	obrisi.setAttribute("class", "hotelButton");
	promijeni.setAttribute("class", "hotelButton");
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

function removeErrorProviders(id){
	var div = document.getElementById(id);
    if(div.childNodes[1]!==undefined){
    	if(div.childNodes[2]!==undefined){
    		div.removeChild(div.childNodes[2]);
    	}
    	div.removeChild(div.childNodes[1]);
    }
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

