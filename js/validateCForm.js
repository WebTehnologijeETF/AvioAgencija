var imePrezimeTb = document.getElementById("imePrezimeC");
var emailTb = document.getElementById("emailC");
var urlTb = document.getElementById("urlC");
var telTb = document.getElementById("telC");
var contentTb = document.getElementById("contentC");
var button = document.getElementById("posaljiC");

imePrezimeTb.removeEventListener("onblur");
emailTb.removeEventListener("onblur");
urlTb.removeEventListener("onblur");
telTb.removeEventListener("onblur");
contentTb.removeEventListener("onblur");
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
        if(content[i]===' ') continue;
		if (content[i].toLowerCase()<'a' || content[i].toLowerCase()>'z'){
			return false;
		}
	}
	return true;
};

imePrezimeTb.addEventListener("blur", function(){
	var imePrezime = imePrezimeTb.value;
	if(imePrezime!==''){
		if(imePrezime.length<4){
			imePrezimeTb.style.backgroundColor="#FF8080";
			addAlert('imePrezimeErrorProviderC', 'img/brisanje.png', 'Prekratko ime i prezime!');
			imePrezimeTb.focus();
		}
		else if(imePrezime.length>30){
			imePrezimeTb.style.backgroundColor="#FF8080";
			addAlert('imePrezimeErrorProviderC', 'img/brisanje.png', 'Predugo ime i prezime!');
			imePrezimeTb.focus();
		}
		else if(!samoSlova(imePrezime)){
			imePrezimeTb.style.backgroundColor="#FF8080";
			addAlert('imePrezimeErrorProviderC', 'img/brisanje.png', 'Ime i przime smije sadrzavati samo slova!')
			imePrezimeTb.focus();
		}
		else{
			addAlert('imePrezimeErrorProviderC', 'img/zad_ok.png', '');
			imePrezimeTb.style.backgroundColor="#80FF80";
		}
	}
	else{
		addAlert('imePrezimeErrorProviderC', 'img/brisanje.png', 'Morate ispuniti ovo polje!');
		imePrezimeTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

emailTb.addEventListener("blur", function(){
	var email = emailTb.value;
	if(email!==''){
		var emailRegex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(email.match(emailRegex)){
			addAlert('emailErrorProviderC', 'img/zad_ok.png', '');
			emailTb.style.backgroundColor="#80FF80";	
		}
		else{
			emailTb.style.backgroundColor="#FF8080";
			addAlert('emailErrorProviderC', 'img/brisanje.png', 'Nije validan format emaila');
			emailTb.focus();
		}
	}
	else{
		addAlert("emailErrorProvider", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		emailTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

urlTb.addEventListener("blur", function(){
	var url=urlTb.value;
	if (url!==''){
		var fbRegex=/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
		if(url.match(fbRegex)){
			addAlert('urlErrorProviderC', 'img/zad_ok.png', '');
			urlTb.style.backgroundColor="#80FF80";
		}
		else{
			urlTb.style.backgroundColor="#FF8080";
			addAlert('urlErrorProviderC','img/brisanje.png','Format fb profila nije uredu! (https://facebook.com/profile_name)');
			urlTb.foucs();
		}
	}
	else{
		addAlert("urlErrorProviderC", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		urlTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
}); 

telTb.addEventListener("blur", function(){
	var tel = telTb.value;
	if (tel!==''){
		var telRegex = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{3})$/;
		if(tel.match(telRegex)){
			addAlert('telErrorProviderC','img/zad_ok.png','');
			telTb.style.backgroundColor="#80FF80";
		}
		else{
			telTb.style.backgroundColor="#FF8080";
			addAlert('telErrorProviderC', 'img/brisanje.png', '');
			telTb.focus();
		}
	}
	else{
		addAlert("telErrorProviderC", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		telTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

contentTb.addEventListener("blur", function(){
	var content = contentTb.value;
	if (content !==''){
		if(content.length<1){
			contentTb.style.backgroundColor="#FF8080";
			addAlert('contentErrorProviderC', 'img/brisanje.png', 'Morate unijeti neki sadržaj!');
			contentTb.focus();
		}
		else{
			addAlert('contentErrorProviderC', 'img/zad_ok.png', '');
			contentTb.style.backgroundColor="#80FF80";
		}
	}
	else{
		addAlert("contentErrorProviderC", 'img/brisanje.png', 'Morate ispuniti ovo polje');
		contentTb.style.backgroundColor="white";
	}
	provjeriValidaciju();
});

