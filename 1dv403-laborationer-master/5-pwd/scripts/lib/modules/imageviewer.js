"use strict";
define(["lib/modules/window"], function(window){

	
	var imageviewer = function(){

		console.log("imageviewer");
	
		createViewer();

	}

	function createViewer(){
		//Create window
		var imgWindow = document.createElement("div");
		imgWindow.setAttribute("class", "imgWindow");

		document.body.appendChild(imgWindow);

		//Create topbar
		var topBar = document.createElement("div");
		topBar.setAttribute("class", "topBar");

		imgWindow.appendChild(topBar);

		//Create main
		var main = document.createElement("div");
		main.setAttribute("class", "main");

		imgWindow.appendChild(main);

		//Create bottom bar
		var bottomBar = document.createElement("div");
		bottomBar.setAttribute("class", "bottomBar");

		imgWindow.appendChild(bottomBar);

	}


	return imageviewer;
	
});
