const scaleSizeValue = document.getElementById("scaleSizeValue");
const scaleSlider = document.getElementById("scaleSlider");
const linkbar = document.getElementById("linkbar");
const nav = document.getElementsByTagName("nav")[0];
const menuButton = document.getElementById("menuButton");
const leafstar = document.getElementsByTagName("h1")[0];
const heading = document.getElementById("heading");
const summary = [...document.getElementsByClassName("level-one")];
const orderedList = document.querySelector("ol li")
let scaleSize = scaleSlider.value;

function abracadabra() {
	menu = document.getElementById("menu")
	menu.style.display = "block"
}

menuButton.onclick = () => {
	abracadabra();
}

scaleSlider.addEventListener('input', () => {
	const scaleSize = scaleSlider.value * 2;
	document.getElementsByTagName("body")[0].style.fontSize = `${scaleSize}vh`;
	document.getElementById("scaleSizeValue").innerHTML = (scaleSize /  2) + "x" ;
	document.getElementById("linkbar").style.width = `${scaleSize}vw`;
	document.getElementById("nav").style.height = `${scaleSize}vh`;
});