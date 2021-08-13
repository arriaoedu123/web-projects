/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 10/08/2021
# Update date: 13/08/2021
# Version: 1.1
*/

const body = document.querySelector('body');

textInput.value = ""; //the input value will no longer remain the same when you reload the page

if (!body.classList.contains('dark')) {
	isCheck.checked = false; //the checkbox will no longer remain checked when you reload the page
}

function toggleMode() {
	body.classList.toggle('dark');
	document.querySelector('.checkText').classList.toggle('checkMode');
}