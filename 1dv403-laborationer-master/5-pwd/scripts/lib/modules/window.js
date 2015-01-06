"use strict";

define(function(){

	var Window = function(settings, appID){
		console.log("window");

		this.createWindow();
		
	};


	Window.prototype.createWindow = function(){
		console.log("createWindow");

		var imgViewer = document.createElement("div");
		imgViewer.setAttribute("class", "imgViewer");

		document.body.appendChild(imgViewer);
		

	}




	return Window;
});