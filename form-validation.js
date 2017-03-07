/*Jeremiah Howell*/

function validate() {
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
	//Created my own variables to store the length and password entered
	//Force of habit from prior programming classes
	var user_Length = userEntered.length;
	var pass_Validator = passEntered;
	
	//If the username is 6 characters, it will be accepted
	if(user_Length >= 6) {
		document.getElementById("usernameGroup").classList.add("has-success");
	}
	else {
  	//Show message that there is an error with the username...
  	document.getElementById("usernameError").innerHTML="Bad username.";
  	document.getElementById("usernameError").classList.remove("hidden-message");
  	document.getElementById("usernameError").classList.add("shown-message");
  	//Turn the username items red
  	document.getElementById("usernameGroup").classList.add("has-error");
	}
	
	//If the password entered is not "password", it will be accepted
	if(pass_Validator != "password") {
		document.getElementById("passwordGroup").classList.add("has-success");
	}
	else {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
	}
	
}
