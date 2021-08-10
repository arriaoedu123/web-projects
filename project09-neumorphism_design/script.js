/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 10/08/2021
# Version: 1.0
*/

const body = document.querySelector('body');

if (!body.classList.contains('dark')) {
	isCheck.checked = false;
}

function toggleMode() {
	body.classList.toggle('dark');
}

document.querySelector('.toggleMode').addEventListener('click', function(){
	document.querySelector('.checkText').classList.toggle('checkMode');
});