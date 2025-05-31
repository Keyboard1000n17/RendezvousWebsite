const scaleSlider = document.getElementById("scaleSlider");
const lineSpacingSlider = document.getElementById("lineSpacingSlider");
const themesList = [...document.getElementsByClassName("themesList")];
const stylesheets = ["./style.css", "lightmode.css", "darkmode.css"];

function abracadabra() {
	document.getElementById("menu").style.display = "block"
};

menuButton.onclick = () => {
	abracadabra();
};

scaleSlider.addEventListener("input", () => {
	const scaleSize = scaleSlider.value;
	document.getElementById("scaleSizeValue").innerHTML = (scaleSize) + "x" ; //Stating to the user in the UI the scale size
	document.getElementsByTagName("body")[0].style.fontSize = `${scaleSize * 2}vh`; //Adjusting font size
	document.getElementsByTagName("body")[0].style.marginLeft = `${scaleSize * 20}vw`; //Adjusting left margin of body
	document.getElementById("linkbar").style.width = `${(scaleSize * 18 )}vw`; //Adjusting width of linkbar
	document.getElementById("linkbar").style.paddingTop =`${(scaleSize * 10) + 1}vh`; //Adjusting top padding of linkbar
	document.getElementsByTagName("nav")[0].style.height = `${(scaleSize * 10)}vh`; //Adjusting height of navbar
	document.getElementsByTagName("body")[0].style.marginTop =`${(scaleSize * 10) + 1}vh`; //Adjusting top margin of body
	document.getElementsByTagName("h1")[0].style.fontSize = `${(scaleSize * 4.4)}vh`; //LeafStar h1 element in the navbar
	document.getElementById("heading").style.fontSize = `${(scaleSize * 4)}vh`; //title of the page IN THE BODY
	document.querySelectorAll("ol > li").forEach(liElement => {
		liElement.style.fontSize = `${(scaleSize * 2.375)}vh`;
	});
	document.querySelectorAll("summary").forEach(summaryElement => {
		summaryElement.style.fontSize = `${(scaleSize * 2.625)}vh`;
	});
});

lineSpacingSlider.addEventListener("input", () => {
	const lineSpacing = lineSpacingSlider.value;
	document.getElementsByTagName("body")[0].style.lineHeight = `${(lineSpacing * 3)}vh`;
	document.getElementById("lineSpacingValue").innerText = lineSpacing + "x";
});

themesList[0].addEventListener("click", () => {
	document.querySelector("link").href = stylesheets[0];
	document.querySelector("body").style.removeProperty("background-color");
	document.querySelector("body").style.backgroundImage = "url(./bg.jpg)"
});

themesList[1].addEventListener("click", () => {
	document.querySelector("link").href = stylesheets[1];
	document.querySelector("body").style.removeProperty("background-image");
	document.querySelector("body").style.backgroundColor = "rgba(240, 240, 240, 1)"
});

themesList[2].addEventListener("click", () => {
	document.querySelector("link").href = stylesheets[2];
	document.querySelector("body").style.removeProperty("background-image");
	document.querySelector("body").style.backgroundColor = "rgb(45, 49, 60)"
});

document.getElementById("close").addEventListener("click", () => {
	document.getElementById("menu").style.display = "none"
});

const linkbar = document.getElementById("linkbar");

// if (window.matchMedia("(orientation: portrait)").matches) {
    // window.alert("Press on the Leafstar text on top to access other articles. Apologies if you have already recieved this message; I ran out of time and couldn't implement cookies.")
	// document.querySelector("h1").addEventListener("click", () => {
        // if (window.getComputedStyle(linkbar).display === "none")
        // linkbar.style.display = "flex"
    // } else {
         // linkbar.style.display = "none";
    // });
// }

if (window.matchMedia("(orientation: portrait)").matches) {
    window.alert("Press on the Leafstar text on top to access other articles. Apologies if you have already received this message; I ran out of time and couldn't implement cookies.");

    document.querySelector("h1").addEventListener("click", () => {
        if (window.getComputedStyle(linkbar).display === "none") {
            document.getElementById("linkbar").style.display = "flex"
        } else {
            document.getElementById("linkbar").style.display = "none"
        }
})};