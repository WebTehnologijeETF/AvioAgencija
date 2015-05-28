function loadNews()
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";

      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }

      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/renderPartialViews.js");
      body.appendChild(scriptToInject);
    }
  }
  xmlhttp.open("GET","novostiBaza.php",true);
  xmlhttp.send();
}

function deleteNews(newsId){
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var parametri = "idNovosti="+newsId.toString();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST","novostBrisanje.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function editNews(newsId){
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var parametri = "idNovosti="+newsId.toString();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/validateNews.js");
      body.appendChild(scriptToInject);
    }
  }
  xmlhttp.open("POST","editovanjeNovosti.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function createNews(){
  var xmlhttp;
  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  var forma=document.getElementById("addNews");
  var inputId = document.getElementById("idNovosti");
  var idNovosti = "foo";
  if(inputId!=null) idNovosti = forma.idNovosti.value;
  var autor = forma.autor.value;
  var naslov = forma.naslov.value;
  var slika = forma.slika.value;
  var sadrzaj = forma.sadrzaj.value;
  var detaljno = forma.detaljno.value;

  var parametri = "idNovosti="+idNovosti.toString()+"&naslov="+naslov+"&autor="+autor+"&slika="+slika+"&sadrzaj="+sadrzaj+"&detaljno="+detaljno;
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST","dodavanjeNovostiBaza.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function addNews(){
  var xmlhttp;
  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/validateNews.js");
      body.appendChild(scriptToInject);
    }
  }
  xmlhttp.open("GET","dodavanjeNovosti.php",true);
  xmlhttp.send();
}

function loadRetrievePass(){
  var xmlhttp;
  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("GET","retrievePass.php",true);
  xmlhttp.send();
}

function loadPassGenerator(){
  var xmlhttp;
  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  var forma = document.getElementById('generate');
  var username=forma.username.value;

  var parametri = "username="+username;

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST","passGenerator.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function deleteComment(commentId){
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var parametri = "idKomentara="+commentId.toString();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST","komentarBrisanje.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function deleteAllComments(newsId){
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var parametri = "idNovosti="+newsId.toString();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST","komentariBrisanjeAll.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function addUser(){
  var xmlhttp;
  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/validateRegistration.js");
      body.appendChild(scriptToInject);
    }
  }
  xmlhttp.open("GET","dodavanjeUsera.php",true);
  xmlhttp.send();
}

function createUser(){
  var xmlhttp;
  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  var forma = document.getElementById("addUser");
  var inputId = document.getElementById("idUsera");
  var idUsera = "foo";
  if(inputId!==null) idUsera = forma.idUsera.value;
  var name = forma.imePrezime.value;
  var username = forma.username.value;
  var email = forma.email.value;
  var password = forma.password.value;

  var parametri = "idUsera="+idUsera.toString()+"&imePrezime="+name+"&username="+username+"&email="+email+"&sifra="+password;
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST","dodavanjeUseraBaza.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function editUser(userId){
  var xmlhttp;
  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  var parametri = "idUsera="+userId.toString();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }

      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/validateRegistration.js");
      body.appendChild(scriptToInject);
    }
  }
  xmlhttp.open("POST","editovanjeUsera.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function deleteUser(userId){
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var parametri = "idUsera="+userId.toString();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST","brisanjeUsera.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function loadUsers(){
  var xmlhttp;

  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("GET","korisnici.php",true);
  xmlhttp.send();
}

function loadNewsComments(id)
{
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var parametri = "idNovosti="+id.toString();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/validateComment.js");
      body.appendChild(scriptToInject);
    }
  }
  xmlhttp.open("POST","zasebnaNovostSaKom.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function insertComment(){
  var forma = document.getElementById("komentarForma");
  var novostId=forma.novostId.value;
  var autorKomentara = forma.autorKomentara.value;
  var tekstKomentara = forma.tekstKomentara.value;
  var emailAutora = forma.emailAutora.value;
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var parametri = "idNovosti="+novostId+"&autor="+autorKomentara+"&tekst="+tekstKomentara+"&email="+emailAutora;
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST","ubaciKomentar.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function loadTable()
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("GET","tableview2.html",true);
  xmlhttp.send();
}

function loadWelcome()
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("GET","welcome.html",true);
  xmlhttp.send();
}

function loadAdminLogin()
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("GET","adminLogin.html",true);
  xmlhttp.send();
}

function validateCredentials(username, password)
{
  var xmlhttp;

  var parametri="korisnickoIme="+username.toString()+"&sifra="+password.toString();

  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("POST", "validateCredentials.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(parametri);
}

function loadPartners()
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
    }
  }
  xmlhttp.open("GET","partners2.html",true);
  xmlhttp.send();
}

function loadRegisterForm()
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/validateRegistration.js");
      body.appendChild(scriptToInject);

      var body2=document.getElementsByTagName("body")[0];
      var counter2=document.getElementById("injectScript-two");
      if(counter2!==null){
        body2.removeChild(counter);
      }
      var scriptToInject2=document.createElement("script");
      scriptToInject2.setAttribute("id", "injectScript-two");
      scriptToInject2.setAttribute("src", "js/renderPartialViews.js");
      body2.appendChild(scriptToInject2);
      
    }
  }
  xmlhttp.open("GET","register2.html",true);
  xmlhttp.send();
}

function loadContactForm()
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";
      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/validateCForm.js");
      body.appendChild(scriptToInject);
      
    }
  }
  xmlhttp.open("GET","contact2.html",true);
  xmlhttp.send();
}

function loadHotels()
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var doc = document.getElementById("sakrij");
      if(doc!==null) doc.style.display="none";

      document.getElementById("injectView").innerHTML=xmlhttp.responseText;

      var body=document.getElementsByTagName("body")[0];
      var counter=document.getElementById("injectScript");
      if(counter!==null){
        body.removeChild(counter);
      }
      var scriptToInject=document.createElement("script");
      scriptToInject.setAttribute("id", "injectScript");
      scriptToInject.setAttribute("src", "js/hotels.js");
      body.appendChild(scriptToInject);
    }
  }
  xmlhttp.open("GET","hotels2.html",true);
  xmlhttp.send();
}



function goTo(url)
{
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      document.open();
      document.write(xhr.responseText);
      document.close();
    }
  }
  xhr.open("GET",url,true);
  xhr.send();
}