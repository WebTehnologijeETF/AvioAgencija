var sadrzajNovosti;
var novost, novostHead, novostNaslov, novostBody, novostDatum, novostAutor, komentari, akomentari,
detaljnije, adetaljnije, novostSlika, novostSadrzaj, paragraf, slika, naslov, autor, datum;
var a;	

var flag = document.getElementById("adminNovosti");
if(flag.value=="admin") ucitajNovostiAdmin();
else ucitajNovosti();

function ucitajNovosti(){
  xhr=new XMLHttpRequest();

  xhr.onreadystatechange=function()
  {
    if(xhr.status === 200 & xhr.readyState === 4) 
    {
      popuniNovosti(JSON.parse(xhr.responseText), false);
    }
  }
  xhr.open("GET","http://localhost/WTAvioagencija/AvioAgencija/novostiServis.php", true);
  xhr.send();
}

function ucitajNovostiAdmin(){
  xhr=new XMLHttpRequest();

  xhr.onreadystatechange=function()
  {
    if(xhr.status === 200 & xhr.readyState === 4) 
    {
      popuniNovosti(JSON.parse(xhr.responseText), true);
    }
  }
  xhr.open("GET","http://localhost/WTAvioagencija/AvioAgencija/novostiServis.php", true);
  xhr.send();
}

function popuniNovosti(novosti, admin)
{
  refreshNovosti();
  for (var i = 0; i<novosti.length; i++)
  {
    if(admin) createElementsAdmin();
    else createElements();
    if(novosti[i].slika!=='prazno') slika.setAttribute("src", novosti[i].slika);
    naslov.innerHTML=novosti[i].naslov;
    paragraf.innerHTML=novosti[i].sadrzaj;
    autor.innerHTML=novosti[i].autor;
    novostDatum.innerHTML=novosti[i].datum;
    if(admin){
      izmijeniNovost.setAttribute("onclick", "editNews('"+novosti[i].id+"')");
      izbrisiNovost.setAttribute("onclick", "deleteNews('"+novosti[i].id+"')");
      izbrisiNovost.innerHTML="Obriši Novost";  
      izmijeniNovost.innerHTML="Izmijeni Novost";
    }
    if(novosti[i].detaljno!=='prazno') {
    	adetaljnije.innerHTML="Detaljnije";
      akomentari.innerHTML=novosti[i].brojKomentara+" komentara";
    	adetaljnije.setAttribute("onclick", "return loadNewsComments("+novosti[i].id+")");
      akomentari.setAttribute("onclick", "return loadNewsComments("+novosti[i].id+")");
    }
    else{
      akomentari.innerHTML=novosti[i].brojKomentara+" komentara";
      akomentari.setAttribute("onclick", "return loadNewsComments("+novosti[i].id+")");
    }
  }
}

function createElements()
{
  sadrzajNovosti= document.getElementById("sadrzaj-novosti");
  novost = document.createElement("div");
  novostHead= document.createElement("div");
  novostNaslov = document.createElement("div");
  novostBody = document.createElement("div");
  novostSlika = document.createElement("div");
  novostSadrzaj = document.createElement("div");
  novostDatum = document.createElement("div");
  novostAutor = document.createElement("div");
  paragraf = document.createElement("p");
  slika = document.createElement("img");
  naslov = document.createElement("h3");
  autor = document.createElement("h5");
  detaljnije = document.createElement("p");
  adetaljnije = document.createElement("a");
  akomentari = document.createElement("a");

  novost.setAttribute("class", "novost");
  novostHead.setAttribute("class", "novost-head");
  novostNaslov.setAttribute("class", "novost-naslov");
  novostBody.setAttribute("class", "novost-body");
  novostSadrzaj.setAttribute("class" ,"novost-sadrzaj");
  novostSlika.setAttribute("class", "novost-slika");
  novostAutor.setAttribute("class", "novost-autor");
  detaljnije.setAttribute("class", "detaljnije");
  novostDatum.setAttribute("class", "novost-datum");
  adetaljnije.setAttribute("href", "#");
  akomentari.setAttribute("class", "komSaDet");
  akomentari.setAttribute("href", "#");

  sadrzajNovosti.appendChild(novost);
  novost.appendChild(novostHead);
  novostHead.appendChild(novostNaslov);
  novostHead.appendChild(novostDatum);
  novostHead.appendChild(novostAutor);
  novostNaslov.appendChild(naslov);
  novostAutor.appendChild(autor);
  novost.appendChild(novostBody);
  novostBody.appendChild(novostSlika); 
  novostBody.appendChild(novostSadrzaj);
  novostSlika.appendChild(slika);
  novostSadrzaj.appendChild(paragraf);
  novostSadrzaj.appendChild(detaljnije);
  detaljnije.appendChild(akomentari);
  detaljnije.appendChild(adetaljnije);
}

function createElementsAdmin(){
  createElements();
  izbrisiNovost = document.createElement("a");
  izmijeniNovost = document.createElement("a");
  breakLine=document.createElement("br");

  izmijeniNovost.setAttribute("style", "float:right");
  izmijeniNovost.setAttribute("href", "#");
  
  izbrisiNovost.setAttribute("style", "float:right; padding-right:10px");
  izbrisiNovost.setAttribute("href", "#");
  detaljnije.appendChild(breakLine);
  detaljnije.appendChild(izmijeniNovost);
  detaljnije.appendChild(izbrisiNovost);
}

function refreshNovosti(){
  var myNode = document.getElementById("sadrzaj-novosti");
  if(myNode!==null){
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
  }
}