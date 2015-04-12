var Meni;
var Timer;
document.onclick = ZatvoriMeni;

function OtvoriMeni(subMenu)
{
	if (Meni) Meni.style.visibility = "hidden";
  	Meni = document.getElementById(subMenu);
  	Meni.style.visibility = "visible";
}

function ZatvoriMeni()
{
	Timer = window.setTimeout(Zatvori, 10);
}

function Zatvori()
{
	if (Meni) Meni.style.visibility = "hidden";
}

function DrziOtvoren()
{
	window.clearTimeout(Timer);
}