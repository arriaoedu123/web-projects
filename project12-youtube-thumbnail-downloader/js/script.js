/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 21/08/2021
# Version: 1.0
*/

const urlField = document.querySelector(".url-field-input");
const previewDiv = document.querySelector(".preview-div");
const img = document.querySelector(".thumbnail");
var videoId = "";

urlField.value = ""; //starting with default urlfield value

urlField.onkeyup = () => { //gettinh thumbnail url function
	let imgUrl = urlField.value; //getting the entered video url 
	previewDiv.classList.add("active"); 

	if (imgUrl.indexOf("https://www.youtube.com/watch?v=") != -1) { //if entered video url is a youtube url
		videoId = imgUrl.split("v=")[1].substring(0, 11); //splitting video url from v= to get video id
		let thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; //video thumbnail url
		img.src = thumbUrl; //transfering img scr to thumb url
	} else
	if (imgUrl.indexOf("https://youtu.be/") !=-1) { //if entered video url is another type of youtube url
		videoId = imgUrl.split("e/")[1].substring(0, 11); //splitting video url from e/ to get video id
		let thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; //video thumbnail url
		img.src = thumbUrl; //transfering img scr to thumb url
	} else { //if video url is wrong then remove the image and preview div active class
		img.src = "";
		previewDiv.classList.remove("active");
	}
}

document.querySelector(".button").addEventListener("click", (event) => {
	let getUrl = img.src; //getting thumbnail url

	if (videoId.length == 11) { //if video length is 11 then download the thumb and animate ripple effect 
		const button = event.target; 
		const wave = document.createElement("span");

		wave.classList.add("wave");
		button.insertAdjacentElement("beforeend", wave);

		const buttonPosition = button.getBoundingClientRect();
		const top = event.clientY - buttonPosition.top; //getting top position of cursor
		const left =  event.clientX - buttonPosition.left; //getting left position of cursor 
		const scale = Math.min(buttonPosition.height, buttonPosition.width); 

		wave.style.setProperty("--top", `${top}px`); //adding top cursor position to the wave
		wave.style.setProperty("--left", `${left}px`); //adding left cursor position to the wave
		wave.style.setProperty("--opacity", 1);
		wave.style.setProperty("--scale", scale);

		function clearRipple() { //clear wave after animation
			wave.style.setProperty("--opacity", 0);
			wave.removeEventListener("transitionend", clearRipple);

			wave.addEventListener("transitionend", () => {
				wave.remove();
				saveAs(getUrl, `thumbnail-${videoId}`);
			});
		}

		wave.addEventListener("transitionend", clearRipple);
	}
});