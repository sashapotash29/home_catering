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

	function loadXMLDoc() {
    	var xmlhttp = new XMLHttpRequest();

	    xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
	           if (xmlhttp.status == 200) {
	                // alert(xmlhttp.responseText);
	                JSONresponse = JSON.parse(xmlhttp.responseText)["result"];

	                for (index in JSONresponse){
	                	populateDemoDishes(JSONresponse[index]);


	                }
	           }
	           else if (xmlhttp.status == 400) {
	              alert('There was an error 400');
	           }
	           else {
	               alert('something else other than 200 was returned');
	           }
	        }
    };

    xmlhttp.open("GET", "/food/top", true);
    xmlhttp.send();
	}

	loadXMLDoc()

	var populateDemoDishes = function(info){
		var cardDiv = document.getElementsByClassName("card-image")[0];
		var newImage = document.createElement("img");
		newImage.src = "/static/food/images/" + info["images"];
		cardDiv.appendChild(newImage);


	};

	

   }
 };
