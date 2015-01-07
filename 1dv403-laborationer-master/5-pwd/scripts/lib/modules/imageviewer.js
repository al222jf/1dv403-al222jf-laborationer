"use strict";
define(["lib/modules/window"], function(window){

	
	var imageviewer = function(){
		createViewer();
		getImg();

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

	function getImg(){
		var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
		var response;

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status == 200){
					response = JSON.parse(xhr.responseText);
					loadImg(response);
				}
			} else {
				console.log("Läsfel, status:"+xhr.status);
			}
		}

		xhr.open("GET", url , true);
		xhr.send(null);
	}

	function loadImg(response){

	}


	return imageviewer;
	
});
