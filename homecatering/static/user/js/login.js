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
		var cardList = document.getElementById("topDishList");
		var cardListLi = document.createElement("li");
		cardListLi.className = "dishLi";
		var cardDiv = document.createElement('div');
		cardDiv.className = "card small";

		var cardImageDiv = document.createElement("div");
		cardImageDiv.className = "card-image waves-effect waves-block waves-light";
		var newImage = document.createElement("img");
		newImage.src = "static/food/images/" + info["images"];
		newImage.className = "activator dishImage";
		cardImageDiv.appendChild(newImage);

		var cardContent = document.createElement("div");
		cardContent.className = "card-content";
		var contentSpan = document.createElement("span");
		contentSpan.className = "card-title activator grey-text text-darken-4";
		contentSpan.innerHTML = info["dish_name"];
		var iDiv = document.createElement("i");
		iDiv.className = "material-icons right";
		iDiv.innerHTML = "more_vert";
		contentSpan.appendChild(iDiv);
		var pLinks = document.createElement("p");
		var aTag = document.createElement("a");
		aTag.href = "www.google.com";
		aTag.innerHTML = "Click for more information!"
		pLinks.appendChild(aTag);
		cardContent.appendChild(contentSpan);
		cardContent.appendChild(pLinks);

		var cardRevealDiv = document.createElement("div");
		cardRevealDiv.className = "card-reveal";
		var cardRevSpan = document.createElement("span");
		cardRevSpan.className = "card-title grey-text text-darken-4"
		var i2Div = document.createElement("i");
		i2Div.className = "material-icons right";
		i2Div.innerHTML = "close";
		cardRevSpan.appendChild(i2Div);
		var cardRevP = document.createElement("p");
		cardRevP.innerHTML = info["description"];
		cardRevealDiv.appendChild(cardRevSpan);
		cardRevealDiv.appendChild(cardRevP);

		cardDiv.appendChild(cardImageDiv);
		cardDiv.appendChild(cardContent);
		cardDiv.appendChild(cardRevealDiv);
		cardListLi.appendChild(cardDiv);
		cardList.appendChild(cardListLi);

	};

	


	// <div className="card">
	//     <div class="card-image waves-effect waves-block waves-light">
	//       <img class="activator" src="images/office.jpg">
	//     </div>
	//     <div class="card-content">
	//       <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
	//       <p><a href="#">This is a link</a></p>
	//     </div>
	//     <div class="card-reveal">
	//       <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
	//       <p>Here is some more information about this product that is only revealed once clicked on.</p>
	//     </div>
 //  	</div>

   }
 };
