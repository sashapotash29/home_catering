document.getElementById('switchButton').addEventListener('click', function(){
	var formTitle = document.getElementById('formTitle');
	var signUpForm = document.getElementById('signUpForm');
	var loginForm = document.getElementById('loginForm');
	if(this.value == "Login"){
		this.value = "Sign Up";
		formTitle.innerHTML = "Login";
		signUpForm.style.display = "none";
		loginForm.style.display = "block";
		
	}
	else{
		this.value = "Login";
		formTitle.innerHTML = "Sign Up";
		signUpForm.style.display = "block";
		loginForm.style.display = "none"
		
	}
	
});