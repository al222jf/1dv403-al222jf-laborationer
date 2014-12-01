"use strict";

var GameOn = {
	init: function (){
		var rows = 4;
		var cols = 4;
		var memoryArr;

		memoryArr = RandomGenerator.getPictureArray(rows, cols);
		console.log(memoryArr);
	}


};

window.onload = GameOn.init;