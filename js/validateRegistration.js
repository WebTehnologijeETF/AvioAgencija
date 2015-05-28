var nameSurnameTb = document.getElementById("imePrezime");
var emailTb = document.getElementById("email");
var sifraTb = document.getElementById("sifra");
var ponoviSifruTb = document.getElementById("potvrdiSifru");
var usernameTb = document.getElementById("username");
var button = document.getElementById("registruj");
var sifra;

//nameSurnameTb.removeEventListener("onblur");
//emailTb.removeEventListener("onblur");
//sifraTb.removeEventListener("onblur");
//ponoviSifruTb.removeEventListener("onblur");
//usernameTb.removeEventListener("onblur");
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
    if (document.getElementsByClassName("OK").length === 5) {
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

nameSurnameTb.addEventListener("blur", function(){
	var nameSurname = nameSurnameTb.value;
	if(nameSurname!==''){
		if(nameSurname.length>30){
			nameSurnameTb.style.backgroundColor = "#FF8080";
			addAlert("imePrezimeErrorProvider", 'img/brisanje.png', 'Predugo ime i prezime');
			nameSurnameTb.focus();
		}
		else if(nameSurname.length<4){
			nameSurnameTb.style.backgroundColor = "#FF8080";
			addAlert("imePrezimeErrorProvider", 'img/brisanje.png', 'Prekratko ime i prezime');	
			nameSurnameTb.focus();
		}
		else if(!samoSlova(nameSurname)){
			nameSurnameTb.style.backgroundColor = "#FF8080";
			addAlert("imePrezimeErrorProvider", 'img/brisanje.png', 'Ime i prezime mora sadrzavati samo slova');	
			nameSurnameTb.focus();
		}
		else{
			addAlert("imePrezimeErrorProvider", 'img/zad_ok.png', '');
            nameSurnameTb.style.backgroundColor = "#80FF80";
		}
	}
	else{
		addAlert("imePrezimeErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		nameSurnameTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

emailTb.addEventListener("blur", function(){
	var email=emailTb.value;
	if(email!==''){
		var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(email.match(emailRegex)){
			addAlert('emailErrorProvider', 'img/zad_ok.png', '');
			emailTb.style.backgroundColor="#80FF80";
		}
		else{
			emailTb.style.backgroundColor="#FF8080";
			addAlert('emailErrorProvider', 'img/brisanje.png', 'Nije validan format emaila');
			emailTb.focus();
		}
	}
	else{
		addAlert("emailErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		emailTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

sifraTb.addEventListener("blur", function(){
	sifra = sifraTb.value;
	if(sifra!==''){
		if(sifra.length<6){
			sifraTb.style.backgroundColor="#FF8080";
			addAlert("sifraErrorProvider", 'img/brisanje.png', 'Prekratka sifra!');
			sifraTb.focus();
		}
		else{
			addAlert('sifraErrorProvider', 'img/zad_ok.png', '');
			sifraTb.style.backgroundColor = "#80FF80";
		}
	}
	else{
		addAlert("sifraErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		sifraTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

ponoviSifruTb.addEventListener("blur", function(){
	var ponoviSifru = ponoviSifruTb.value;
	if(ponoviSifru!==''){
		if(ponoviSifru!=sifra){
			ponoviSifruTb.style.backgroundColor="#FF8080";
			addAlert('potvrdiSifruErrorProvider', 'img/brisanje.png', 'Sifre se ne podudaraju!');
			ponoviSifruTb.focus();
		}
		else{
			addAlert('potvrdiSifruErrorProvider', 'img/zad_ok.png', '');
			ponoviSifruTb.style.backgroundColor="#80FF80";
		}
	}
	else{
		addAlert("potvrdiSifruErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		ponoviSifruTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});	

usernameTb.addEventListener("blur", function(){
	var username = usernameTb.value;
	if(username!==''){
		if(username.length<5){
			usernameTb.style.backgroundColor="#FF8080";
			addAlert('usernameErrorProvider', 'img/brisanje.png', 'Username prekratak!')
			usernameTb.focus();
		}
		else{
			addAlert('usernameErrorProvider', 'img/zad_ok.png', '');
			usernameTb.style.backgroundColor='#80FF80';
		}
	}
	else{
		addAlert("usernameErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		usernameTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});
