"use strict";

var GameOn = {
	init: function (){
		var rows = 4;
		var cols = 4;
		var memoryArr;

		memoryArr = RandomGenerator.getPictureArray(rows, cols);
		console.log(memoryArr.length);
		GameOn.setClass(memoryArr);


	},

	setClass: function(memoryArr){
		var picDiv;
		var getDivId;
		var imgTag;
		
		for(var i = 0; i < memoryArr.length; i += 1){
			
			getDivId = document.getElementById("memoryGame");
			picDiv = document.createElement("div");
			imgTag = document.createElement("img");

			picDiv.setAttribute("class", "tile");
			picDiv.setAttribute("rel", memoryArr[i]);
			imgTag.setAttribute("src", "pics/0.png")

			getDivId.appendChild(picDiv);
			picDiv.appendChild(imgTag);


		}

	},

	counter: function(){
		//Ska räkna antal gjorda drag
	},
	


};

window.onload = GameOn.init;