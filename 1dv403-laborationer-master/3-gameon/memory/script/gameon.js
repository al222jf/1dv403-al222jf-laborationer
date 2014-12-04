"use strict";

var GameOn = {
	array: [],
	countMove: 0,
	countClick: 0,
	countWon: 0,
	halfRandom: [],
	countElement : null,

	init: function (){
		var that = this;
		var count = 0;

		var rows = 4;
		var cols = 4;
		var memoryArr;

		memoryArr = RandomGenerator.getPictureArray(rows, cols);
		GameOn.halfRandom = memoryArr;

		GameOn.setClass(memoryArr);
	},

	setClass: function(memoryArr){
		var picDiv;
		var getDivId;
		var aTag;
		var imgTag;
		var countDiv;
		var countP;
		
		countDiv = document.getElementById("counter");
		countP = document.createElement("p");
		countP.innerHTML = "Antal drag: "+GameOn.countMove;
		countDiv.appendChild(countP);
		GameOn.countElement = countP;

		for(var i = 0; i < memoryArr.length; i += 1){
			
			getDivId = document.getElementById("memoryGame");
			picDiv = document.createElement("div");
			aTag = document.createElement("a");
			imgTag = document.createElement("img");
			
			picDiv.setAttribute("class", "tile");
			aTag.setAttribute("href", "#");
			aTag.setAttribute("rel", memoryArr[i]);
			imgTag.setAttribute("src", "pics/0.png");
			
			getDivId.appendChild(picDiv);
			picDiv.appendChild(aTag);
			aTag.appendChild(imgTag);
			aTag.addEventListener("click", GameOn.switchImage, false);
		}
	},
	switchImage: function(e){
		e.preventDefault();
		var aElement = this;

		var rel;
		var child;

		if(!aElement.hasAttribute("type")){

			GameOn.clickCount();

			if(GameOn.array.length < 2) {

				rel = aElement.getAttribute("rel");
				aElement.setAttribute("type", "#");
				child = aElement.firstChild;
				child.setAttribute("src", "pics/"+rel+".png");

				GameOn.array.push(aElement);
			} 
		} 

		if(GameOn.array.length === 2) {

			GameOn.moveCount();

			if(GameOn.array[0].getAttribute("rel")	=== GameOn.array[1].getAttribute("rel")){

				GameOn.array.length = 0;
				GameOn.whenFinished();

			} else {

				setTimeout(function(){

					for(var i = 0; i < GameOn.array.length; i += 1){

						GameOn.array[i].firstChild.setAttribute("src", "pics/0.png");
						GameOn.array[i].removeAttribute("type");
					}

					GameOn.array.length = 0;
				},1000);
			}	
		}
	},
	

	moveCount: function(){
		//Ska räkna antal gjorda drag
		GameOn.countMove+=1;
		GameOn.countElement.innerHTML = "Antal drag: " + GameOn.countMove;
	},

	clickCount: function(){
		GameOn.countClick+=1;
		//console.log(GameOn.countClick);
	},

	whenFinished: function(){
		GameOn.countWon+=1;

		console.log(GameOn.halfRandom.length / 2);
		console.log(GameOn.countWon);

		if(GameOn.halfRandom.length / 2 === GameOn.countWon){

			GameOn.countElement.innerHTML = "Det tog "+GameOn.countClick+" klick och "+GameOn.countMove+" drag för att klara spelet!";
		}
	},
};

window.onload = GameOn.init;