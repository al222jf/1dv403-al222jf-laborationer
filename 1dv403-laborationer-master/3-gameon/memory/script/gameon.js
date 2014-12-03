"use strict";

var GameOn = {
	array: [],

	init: function (){
		var that = this;

		var rows = 4;
		var cols = 4;
		var memoryArr;

		memoryArr = RandomGenerator.getPictureArray(rows, cols);
		GameOn.setClass(memoryArr);
		GameOn.whenClick();
	},

	setClass: function(memoryArr){
		var picDiv;
		var getDivId;
		var aTag;
		var imgTag;
		
		
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

		}
	},

	whenClick: function(){
		/*var divOnClick = document.getElementById("memoryGame");
		

		divOnClick.onclick = function(e){
			var aOnClick = document.getElementsByTagName("a");
			console.log(this.getAttribute("rel"));
		};*/

		/*var divOnClick = document.getElementById("memoryGame");

		divOnClick.addEventListener("click", function(){

			var rel = this.getAttribute("rel");
			console.log(rel);
		});*/

		var aTags = document.getElementsByTagName("a");

		for(var i = 0; i < aTags.length; i += 1){
			aTags[i].addEventListener("click", getRel, false)
		};

		function getRel(e){
			e.preventDefault();

			var relValue;
			var aElement;

			relValue = this.getAttribute("rel");
			aElement = this;
			
			GameOn.switchImage(relValue, aElement);
		};
	},
	switchImage: function(relValue, aElement){
		var child1;
		var child2;
		var img1;
		

		if(GameOn.array.length < 2){

				if(GameOn.array < 1){
					child1 = aElement.firstChild;
					img1 = child1.setAttribute("src", "pics/"+relValue+".png");
					GameOn.array.push(relValue, child1);
					//console.log("child1");
				} else {
					child2 = aElement.firstChild;
					child2.setAttribute("src", "pics/"+relValue+".png");
					//console.log("child2");
				}

				
			}

		if (GameOn.array.length === 2 && GameOn.array[0] === GameOn.array[1]){

			GameOn.array.length = 0;
			//console.log("reset on match");

		} else if (GameOn.array.length === 2){

			GameOn.array.length = 0;
			//child1.setAttribute("src", "pics/0.png");
			//child2.setAttribute("src", "pics/0.png");
			//console.log("reset");
		}
		console.log(GameOn.array);
	},
	

	counter: function(){
		//Ska räkna antal gjorda drag
	},
};

window.onload = GameOn.init;