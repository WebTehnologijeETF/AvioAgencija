var tekstTb = document.getElementById("tekstN");
var emailTb = document.getElementById("emailN");
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
    if (document.getElementsByClassName("OK").length === 2) {
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

emailTb.addEventListener("blur", function(){
	var email=emailTb.value;
	if(email!==''){
		var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(email.match(emailRegex)){
			addAlert('emailErrorProviderN', 'img/zad_ok.png', '');
			emailTb.style.backgroundColor="#80FF80";
		}
		else{
			emailTb.style.backgroundColor="#FF8080";
			addAlert('emailErrorProviderN', 'img/brisanje.png', 'Nije validan format emaila');
			emailTb.focus();
		}
	}
	else{
		addAlert("emailErrorProviderN", 'img/zad_ok.png', '');
		emailTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});	

tekstTb.addEventListener("blur", function(){
	var tekst = tekstTb.value;
	if(tekst!==''){
		if(tekst.length<3){
			tekstTb.style.backgroundColor="#FF8080";
			addAlert('tekstErrorProviderN', 'img/brisanje.png', 'Tekst prekratak!')
			tekstTb.focus();
		}
		else{
			addAlert('tekstErrorProviderN', 'img/zad_ok.png', '');
			tekstTb.style.backgroundColor='#80FF80';
		}
	}
	else{
		addAlert("tekstErrorProviderN", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		tekstTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});
