/* 
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 14/08/2021
# Version: 1.0
*/

const detectAdBlock = document.querySelector("#detectAdBlock");
const container = document.querySelector(".container");
const button = container.querySelector("button");

//some classes that adblock do not render
let adClasses = ["ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"];
for (let item of adClasses) {
	detectAdBlock.classList.add(item); //adding all adblock classes in detectAdBlock element	
}

//getting display value of detectAdBlock element
let getDisplay = window.getComputedStyle(detectAdBlock).getPropertyValue("display");

//function to dispenser adblock warning
function dispenserWarning() {
	container.classList.remove("show");
}

if (!container.classList.contains("show")) {
	//if display value is none then show the warning
	getDisplay == "none" ? container.classList.add("show") : container.classList.remove("show");
}