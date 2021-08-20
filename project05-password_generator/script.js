/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 14/05/2021
# Update date: 19/08/2021
# Version: 1.2
*/

document.getElementById("password").value = ""; //starting with empty password field

//function to generate password
function getPassword() {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&{}()"; //this is every password characters
	var passwordLength = 16; //max password length
	var password = "";

	//choosing a random character to generate the password
	for (var i=0; i<passwordLength; i++) {
		var randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber+1);
	}
	document.getElementById("password").value = password;
}

//function to copy password
function copyPassword() {
	var copyPass = document.getElementById("password");
	copyPass.select();
	copyPass.setSelectionRange(0,9999);
	document.execCommand("copy");
}