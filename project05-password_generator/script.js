/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 14/05/2021
# Update date: 15/05/2021
# Version: 1.1
*/

// Generate Password function
function getPassword() {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&{}()";
	var passwordLength = 16;
	var password = "";

	for (var i=0; i<passwordLength; i++) {
		var randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber+1);
	}
	document.getElementById("password").value = password;
}

// Copy Password function
function copyPassword() {
	var copyPass = document.getElementById("password");
	copyPass.select();
	copyPass.setSelectionRange(0,9999);
	document.execCommand("copy");
}