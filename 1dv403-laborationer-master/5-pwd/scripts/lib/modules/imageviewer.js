"use strict";
console.log("utanför");
define(function(){

	var ImageViewer = function(){

	console.log("Hej");
	var imgViewer = document.createElement("div");
	imgViewer.setAttribute("class", "imgViewer");

	document.body.appendChild(imgViewer);
	}

	

	return ImageViewer;
});
