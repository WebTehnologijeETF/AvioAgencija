var autorTb = document.getElementById("autor");
var naslovTb = document.getElementById("naslov");
var slikaTb = document.getElementById("slika");
var sadrzajTb = document.getElementById("sadrzaj");
var detaljnoTb = document.getElementById("detaljno");
var button = document.getElementById("registruj");

button.disabled= true;
button.style.backgroundColor="grey";

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
        if(content[i]===' ' || content[i]==='-' || content[i].toLowerCase()=='ć' || content[i].toLowerCase()=='č' || content[i].toLowerCase()=='š' || content[i].toLowerCase()=='ž' || content[i].toLowerCase()=='đ') continue;
		if (content[i].toLowerCase()<'a' || content[i].toLowerCase()>'z'){
			return false;
		}
	}
	return true;
};

autorTb.addEventListener("blur", function(){
	var autor = autorTb.value;
	if(autor!==''){
		if(autor.length>30){
			autorTb.style.backgroundColor = "#FF8080";
			addAlert("autorErrorProvider", 'img/brisanje.png', 'Predugo ime i prezime');
			autorTb.focus();
		}
		else if(autor.length<4){
			autorTb.style.backgroundColor = "#FF8080";
			addAlert("autorErrorProvider", 'img/brisanje.png', 'Prekratko ime i prezime');	
			autorTb.focus();
		}
		else if(!samoSlova(autor)){
			autorTb.style.backgroundColor = "#FF8080";
			addAlert("autorErrorProvider", 'img/brisanje.png', 'Ime i prezime mora sadrzavati samo slova');	
			autorTb.focus();
		}
		else{
			addAlert("autorErrorProvider", 'img/zad_ok.png', '');
            autorTb.style.backgroundColor = "#80FF80";
		}
	}
	else{
		addAlert("autorErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		autorTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

sadrzajTb.addEventListener("blur", function(){
	var sadrzaj = sadrzajTb.value;
	if (sadrzaj !==''){
		if(sadrzaj.length<1){
			sadrzajTb.style.backgroundColor="#FF8080";
			addAlert('sadrzajErrorProvider', 'img/brisanje.png', 'Morate unijeti neki sadržaj!');
			sadrzajTb.focus();
		}
		else{
			addAlert('sadrzajErrorProvider', 'img/zad_ok.png', '');
			sadrzajTb.style.backgroundColor="#80FF80";
		}
	}
	else{
		addAlert("sadrzajErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		sadrzajTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

naslovTb.addEventListener("blur", function(){
	var naslov = naslovTb.value;
	if(naslov!==''){
		if(naslov.length<6){
			naslovTb.style.backgroundColor="#FF8080";
			addAlert('naslovErrorProvider', 'img/brisanje.png', 'Username prekratak!')
			naslovTb.focus();
		}
		else{
			addAlert('naslovErrorProvider', 'img/zad_ok.png', '');
			naslovTb.style.backgroundColor='#80FF80';
		}
	}
	else{
		addAlert("naslovErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		naslovTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});
