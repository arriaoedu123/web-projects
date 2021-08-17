/* 
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 16/08/2021
# Version: 1.1
*/

const detectAdBlock = document.querySelector("#detectAdBlock");
const stillActive = document.querySelector("#stillActive");
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
	//if display value is none then show the warning else remove it
	getDisplay == "none" ? container.classList.add("show") : container.classList.remove("show");
}

stillActive.addEventListener("click", ()=> {
	getDisplay = window.getComputedStyle(detectAdBlock).getPropertyValue("display");
	//if user click on screen with adblock active then show the warning else remove the prevention
	getDisplay == "none" ? container.classList.add("show") : stillActive.style.display = "none";
});

//delete everything below if you will use this script in a real website
//uncheck checkbox input by default
isCheck.checked = false;

//checkbox function
function toggleAdBlock() {
	detectAdBlock.classList.toggle('on'); //showing the detectAdBlock div
	stillActive.classList.toggle('on'); //showing the stillActive div
	document.querySelector('.checkText').classList.toggle('checkMode'); //changing the checkbox text

	if (isCheck.checked == true) {
		//if the checkbox input is checked then show the warning
		container.classList.add("show");
	}
}
