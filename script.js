var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randBackground = document.querySelector(".randBackground");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradientRand() {
	var randColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	color1.value=randColor1;
	color2.value=randColor2;
	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randBackground.addEventListener("click",setGradientRand);

window.addEventListener('load', setGradient, false);


