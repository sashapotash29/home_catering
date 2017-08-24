document.onreadystatechange = function () {
    if (document.readyState == "complete") {
     // document is ready. Do your stuff here
	document.getElementById('switchButton').addEventListener('click', function(){
		var formTitle = document.getElementById('formTitle');
		var signUpForm = document.getElementById('signUpForm');
		var loginForm = document.getElementById('loginForm');
		console.log(this.innerHTML);
		if(this.innerHTML == "Login"){
			this.innerHTML = "Sign Up";
			formTitle.innerHTML = "Login";
			signUpForm.style.display = "none";
			loginForm.style.display = "block";
			
		}
		else{
			this.innerHTML = "Login";
			formTitle.innerHTML = "Sign Up";
			signUpForm.style.display = "block";
			loginForm.style.display = "none"
			
		}
		
	});

	var populateDemoDishes = function(info){


	};

   }
 };
