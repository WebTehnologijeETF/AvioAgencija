var nameSurnameTb = document.getElementById("imePrezime");
var emailTb = document.getElementById("email");
var sifraTb = document.getElementById("sifra");
var ponoviSifruTb = document.getElementById("potvrdiSifru");
var usernameTb = document.getElementById("username");
var button = document.getElementById("registruj");
var sifra;

nameSurnameTb.removeEventListener("onblur");
emailTb.removeEventListener("onblur");
sifraTb.removeEventListener("onblur");
ponoviSifruTb.removeEventListener("onblur");
usernameTb.removeEventListener("onblur");
button.disabled= true;
button.setAttribute('background', 'grey');

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
    var newContent = document.createElement("img");
	newContent.setAttribute('src', url);
	var errorText = document.createTextNode(error);
	div.appendChild(newContent);
	div.appendChild(errorText);
}

function provjeriValidaciju() {
    if (document.getElementsByClassName("OK").length === 5) {
        button.disabled = false;
        button.setAttribute('background', 'rgb(30, 81, 128)');
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

nameSurnameTb.addEventListener("blur", function(){
	var nameSurname = nameSurnameTb.value;
	if(nameSurname!==''){
		if(nameSurname.length>30){
			nameSurnameTb.style.backgroundColor = "#FF8080";
			addAlert("imePrezimeErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Predugo ime i prezime');
			nameSurnameTb.focus();
		}
		else if(nameSurname.length<4){
			nameSurnameTb.style.backgroundColor = "#FF8080";
			addAlert("imePrezimeErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Prekratko ime i prezime');	
			nameSurnameTb.focus();
		}
		else if(!samoSlova(nameSurname)){
			nameSurnameTb.style.backgroundColor = "#FF8080";
			addAlert("imePrezimeErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Ime i prezime mora sadrzavati samo slova');	
			nameSurnameTb.focus();
		}
		else{
			addAlert("imePrezimeErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
            nameSurnameTb.style.backgroundColor = "#80FF80";
		}
	}
	else{
		addAlert("imePrezimeErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
		nameSurnameTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

emailTb.addEventListener("blur", function(){
	var email=emailTb.value;
	if(email!==''){
		var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(email.match(emailRegex)){
			addAlert('emailErrorProvider', 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
			emailTb.style.backgroundColor="#80FF80";
		}
		else{
			emailTb.style.backgroundColor="#FF8080";
			addAlert('emailErrorProvider', 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Nije validan format emaila');
			emailTb.focus();
		}
	}
	else{
		addAlert("emailErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
		emailTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

sifraTb.addEventListener("blur", function(){
	sifra = sifraTb.value;
	if(sifra!==''){
		if(sifra.length<6){
			sifraTb.style.backgroundColor="#FF8080";
			addAlert("sifraErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Prekratka sifra!');
			sifraTb.focus();
		}
		else{
			addAlert('sifraErrorProvider', 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
			sifraTb.style.backgroundColor = "#80FF80";
		}
	}
	else{
		addAlert("sifraErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
		sifraTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

ponoviSifruTb.addEventListener("blur", function(){
	var ponoviSifru = ponoviSifruTb.value;
	if(ponoviSifru!==''){
		if(ponoviSifru!=sifra){
			ponoviSifruTb.style.backgroundColor="#FF8080";
			addAlert('potvrdiSifruErrorProvider', 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Sifre se ne podudaraju!');
			ponoviSifruTb.focus();
		}
		else{
			addAlert('potvrdiSifruErrorProvider', 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
			ponoviSifruTb.style.backgroundColor="#80FF80";
		}
	}
	else{
		addAlert("potvrdiSifruErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
		ponoviSifruTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});	

usernameTb.addEventListener("blur", function(){
	var username = usernameTb.value;
	if(username!==''){
		if(username.length<6){
			sifraTb.style.backgroundColor="#FF8080";
			addAlert('usernameErrorProvider', 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Username prekratak!')
			sifraTb.focus();
		}
		else{
			addAlert('usernameErrorProvider', 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
			usernameTb.style.backgroundColor='#80FF80';
		}
	}
	else{
		addAlert("usernameErrorProvider", 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
		usernameTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});