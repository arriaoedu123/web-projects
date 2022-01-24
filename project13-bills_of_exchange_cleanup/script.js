/*
# Creator: Aryon Rabello
# GitHub: https://github.com/arriaoedu123/
# Creation date: 24/01/2022
# Version: 1.0
*/

const textarea = document.querySelector(".textarea")
const button = document.querySelector(".btn")

textarea.addEventListener("keyup", e =>{
	textarea.style.height = "63px"
	let scHeight = e.target.scrollHeight
	textarea.style.height = `${scHeight}px`
})

button.addEventListener("click", () => {
	let billPaste = document.querySelector(".bill-paste").value
	let billCopy = document.querySelector(".bill-copy")

	billCopy.value = billPaste.replaceAll(" ", "").replaceAll(".", "")
})