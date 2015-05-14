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
  xmlhttp.open("GET","novosti.php",true);
  xmlhttp.send();
}

function loadFullNews(datum, naslov, autor, slika, sadrzajNovosti, detaljnijeNovosti)
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
  var parametri = "date="+datum.toString()+"&heading="+naslov.toString()+"&newsAutor="+autor.toString()+"&img="+slika.toString()+"&contentNews="+sadrzajNovosti.toString()+"&detailNews="+detaljnijeNovosti.toString();
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
  xmlhttp.open("POST","zasebnaNovost.php",true);
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