var Item;
var Timer;
document.onclick = CloseMenu;


function OpenMenu(Menu)
{
	if (Item) Item.style.visibility = "hidden";
  	Item = document.getElementById(Menu);
  	Item.style.visibility = "visible";
}


function CloseMenu()
{
	Timer = window.setTimeout(PerformClose, 10);
}

function PerformClose()
{
	if (Item) Item.style.visibility = "hidden";
}


function KeepSubmenu()
{
	window.clearTimeout(Timer);
}