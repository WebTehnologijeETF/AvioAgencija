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
    document.getElementById("injectView").innerHTML=xmlhttp.responseText;

    var body=document.getElementsByTagName("body")[0];
    var counter=document.getElementById("injectScript");
    if(counter!==null){
      body.removeChild(counter);
    }
  }
}
xmlhttp.open("GET","index2.html",true);
xmlhttp.send();
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