/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 16/08/2021
# Version: 1.0
*/

let userAgent = navigator.userAgent;
let browser;

//specifying what browser is being used
if (userAgent.match(/edg/i)) {
	browser = "edge";
} else
if (userAgent.match(/firefox|fxios/i)) {
	browser = "firefox";
} else
if (userAgent.match(/opr\//i)) {
	browser = "opera";
} else
if (userAgent.match(/chrome|chromium|crios/i)) {
	browser = "chrome";
} else
if (userAgent.match(/safari/i)) {
	browser = "safari";
} else {
	document.querySelector('.container h1').innerHTML = "You're using another browser";
}

const icon = document.querySelector(`.browsers .${browser}`);

//giving browser icon a opacity 1
if (icon) {
	icon.style.opacity = "1";
}



