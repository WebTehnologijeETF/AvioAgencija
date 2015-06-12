var sadrzajNovosti;
var novost, novostHead, novostNaslov, novostBody, novostDatum, novostAutor, komentari, akomentari,
detaljnije, adetaljnije, novostSlika, novostSadrzaj, paragraf, slika, naslov, autor, datum,
sadrzajKomentara, smallDatum, smallAutor, tekstKom, breakLine, breakLine2, detaljnijaNovost, h4Komentari;
var a;  
var forma, autorKomentar, emailKomentar, tekstKomentar, naslovKomentar, dugmeKomentar,
    lautorKomentar, lemailKomentar, ltekstKomentar, breakLineKomentar,
    emailKomentarEP, autorKomentarEP, tekstKomentarEP, novostId;
var breakLine3, breakLine4, breakLine5, breakLine6, breakLine7, breakLine8, breakLine9, breakLine10; 

function ucitajNovostiKomentare(idNovosti){
  xhr=new XMLHttpRequest();
  var parametri = "idNovosti="+idNovosti.toString();
  console.log(idNovosti);
  xhr.onreadystatechange=function()
  {
    if(xhr.status === 200 & xhr.readyState === 4) 
    {
      popuniNovostKomentare(JSON.parse(xhr.responseText));
    }
  }
  xhr.open("GET","http://localhost/WTAvioagencija/AvioAgencija/komentariServis.php?"+parametri, true);
  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send();
}

function popuniNovostKomentare(komentari)
{
  refreshStranicu();
  createElements();
  console.log(komentari);
  naslov.innerHTML = komentari[0].naslovNovosti;
  paragraf.innerHTML = komentari[0].sadrzajNovosti;
  autor.innerHTML = komentari[0].autorNovosti;
  novostDatum.innerHTML=komentari[0].datumNovosti;
  if(komentari[0].slikaNovosti!==null) slika.setAttribute("src", komentari[0].slikaNovosti);
  if(komentari[0].detaljnoNovosti!==null){ 
    tekstDetaljnije.innerHTML=komentari[0].detaljnoNovosti;
    naslovDetaljnije.innerHTML="Detaljniji opis novosti:";
  }

  sadrzajKomentara.setAttribute("style", "padding-left:30px;max-width:400px");
  h4Komentari = document.createElement("h4");
  sadrzajKomentara.appendChild(h4Komentari);
  h4Komentari.innerHTML = "Komentari: ";
  for (var i = 1; i<komentari.length; i++)
  {
    createComments();
    if(komentari[i].email!==""){ 
      mailto.setAttribute("href", "mailto:"+komentari[i].email.toString()+"");
      smallAutorMail.appendChild(mailto);
      mailto.innerHTML=komentari[i].autor;
      smallAutor.innerHTML=komentari[i].email;
    }
    else {
      smallAutor.innerHTML="";
      smallAutorMail.innerHTML=komentari[i].autor;
    }
    smallDatum.innerHTML=komentari[i].datum;
    tekstKom.innerHTML=komentari[i].tekst;
  }
  novostSadrzaj.appendChild(sadrzajKomentara);
  createForm();
  novostId.setAttribute("value", komentari[0].idNovosti);
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
  detaljnijaNovost = document.createElement("div");
  sadrzajKomentara = document.createElement("div");
  tekstDetaljnije = document.createElement("p");
  naslovDetaljnije = document.createElement("h5");
  breakLine = document.createElement("br");

  novost.setAttribute("class", "novost");
  novostHead.setAttribute("class", "novost-head");
  novostNaslov.setAttribute("class", "novost-naslov");
  novostBody.setAttribute("class", "novost-body");
  novostSadrzaj.setAttribute("class" ,"novost-sadrzaj");
  detaljnijaNovost.setAttribute("class" ,"novost-sadrzaj");
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
  novostSadrzaj.appendChild(breakLine);
  novostSadrzaj.appendChild(detaljnijaNovost);
  detaljnijaNovost.appendChild(naslovDetaljnije);
  detaljnijaNovost.appendChild(tekstDetaljnije);
}

function createComments()
{
  smallAutor = document.createElement("small");
  smallDatum = document.createElement("small");
  smallAutorMail = document.createElement("small");
  mailto = document.createElement("a");
  tekstKom = document.createElement("p");
  breakLine2 = document.createElement("br");
  breakLine = document.createElement("br");
  breakLine3 = document.createElement("br");
  breakLine4 = document.createElement("br");
  breakLineKomentar = document.createElement("br");
  
  smallAutor.setAttribute("style", "float:left");
  smallDatum.setAttribute("style", "float:right; padding-right:1px; padding-bottom:10px");
  smallAutorMail.setAttribute("style", "float:left");
  //smallAutorMail.appendChild(mailto);

  sadrzajKomentara.appendChild(smallAutorMail);
  sadrzajKomentara.appendChild(breakLine);
  sadrzajKomentara.appendChild(smallAutor);
  sadrzajKomentara.appendChild(smallDatum);
  sadrzajKomentara.appendChild(breakLineKomentar);
  sadrzajKomentara.appendChild(tekstKom);
  sadrzajKomentara.appendChild(breakLine3);
  sadrzajKomentara.appendChild(breakLine4);
}

function createForm(){
  forma = document.createElement("form");
  autorKomentar = document.createElement("input");
  emailKomentar = document.createElement("input");
  tekstKomentar = document.createElement("textarea");
  breakLineKomentar = document.createElement("br");
  lautorKomentar = document.createElement("label");
  lemailKomentar = document.createElement("label");
  ltekstKomentar = document.createElement("label");
  emailKomentarEP = document.createElement("div");
  autorKomentarEP = document.createElement("div");
  tekstKomentarEP = document.createElement("div");
  dugmeKomentar = document.createElement("input");
  novostId = document.createElement("input");
  breakLine = document.createElement("br");
  breakLine2 = document.createElement("br");
  breakLine3 = document.createElement("br");
  breakLine4 = document.createElement("br");
  breakLine5 = document.createElement("br");
  breakLine6 = document.createElement("br");
  breakLine7 = document.createElement("br");
  breakLine8 = document.createElement("br");
  breakLine9 = document.createElement("br");
  breakLine10 = document.createElement("br");

  lautorKomentar.innerHTML="Autor :";
  lemailKomentar.innerHTML="Email :";
  ltekstKomentar.innerHTML="Komentar :";
  emailKomentarEP.innerHTML = "&nbsp;&nbsp;";
  autorKomentarEP.innerHTML = "&nbsp;&nbsp;";
  tekstKomentarEP.innerHTML = "&nbsp;&nbsp;";

  forma.setAttribute("id", "komentarForma");
  forma.setAttribute("method", "POST");
  forma.setAttribute("action", "dodajKomentar.php");

  novostId.setAttribute("style", "display:none");
  novostId.setAttribute("name", "novostId");

  lautorKomentar.setAttribute("for","autorN");
  lemailKomentar.setAttribute("for","emailN");

  autorKomentar.setAttribute("id","autorN");
  autorKomentar.setAttribute("type","text");
  autorKomentar.setAttribute("name","autorKomentara");
  autorKomentar.setAttribute("placeholder","Unesite vase ime");
  autorKomentar.setAttribute("style","width: 400px");

  emailKomentar.setAttribute("id","emailN");
  emailKomentar.setAttribute("type","text");
  emailKomentar.setAttribute("name","emailAutora");
  emailKomentar.setAttribute("placeholder","Unesite vas email");
  emailKomentar.setAttribute("style","width: 400px");

  emailKomentarEP.setAttribute("id", "emailErrorProviderN");
  autorKomentarEP.setAttribute("id", "autorErrorProviderN");
  tekstKomentarEP.setAttribute("id", "tekstErrorProviderN");

  tekstKomentar.setAttribute("id", "tekstN");
  tekstKomentar.setAttribute("name", "tekstKomentara");
  tekstKomentar.setAttribute("rows", "4");
  tekstKomentar.setAttribute("cols", "55");

  dugmeKomentar.setAttribute("id", "registruj");
  dugmeKomentar.setAttribute("class", "contact-button");
  dugmeKomentar.setAttribute("type", "button");
  dugmeKomentar.setAttribute("value", "Pošalji komentar");
  dugmeKomentar.setAttribute("onclick", "return insertComment()");

  forma.appendChild(lautorKomentar);
  forma.appendChild(breakLine);
  forma.appendChild(autorKomentar);
  forma.appendChild(breakLineKomentar);forma.appendChild(breakLine2);
  forma.appendChild(lemailKomentar);
  forma.appendChild(breakLine3);
  forma.appendChild(emailKomentar);
  forma.appendChild(emailKomentarEP);
  forma.appendChild(breakLine4);forma.appendChild(breakLine5);
  forma.appendChild(novostId);
  forma.appendChild(ltekstKomentar);
  forma.appendChild(breakLine6);
  forma.appendChild(tekstKomentar);
  forma.appendChild(tekstKomentarEP);
  forma.appendChild(breakLine7);forma.appendChild(breakLine8);
  forma.appendChild(breakLine9);forma.appendChild(breakLine10);
  forma.appendChild(dugmeKomentar);
  sadrzajKomentara.appendChild(forma);
}

function refreshStranicu(){
  var myNode = document.getElementById("sadrzaj-novosti");
  if(myNode!==null){
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
  }
}