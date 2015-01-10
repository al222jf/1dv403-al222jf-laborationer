"use strict";

define(["lib/modules/imageviewer"], function(ImageViewer){
		

	var desktop = {

		init: function() {
			desktop.createToolBar();
		},

		createToolBar: function(){
			//background image
			

			//Create desktop

			var desktopDiv = document.createElement("div");
			desktopDiv.setAttribute("id", "desktop");

			document.body.appendChild(desktopDiv);

			desktopDiv.style.backgroundImage="url('http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/pics/1050509.jpg')";
			
			//Toolbar div
			var toolBar = document.createElement("div");
			toolBar.setAttribute("id", "toolBar");
			desktopDiv.appendChild(toolBar);

			//Imageviewer 
			var imgViewerAtag = document.createElement("a");
			var imgViewerImgTag = document.createElement("img");

			imgViewerAtag.setAttribute("href", "#");
			imgViewerImgTag.setAttribute("src", "pics/imgview.png");
			imgViewerImgTag.setAttribute("class", "icons");
			imgViewerImgTag.setAttribute("id", "imgViewer");

			toolBar.appendChild(imgViewerAtag);
			imgViewerAtag.appendChild(imgViewerImgTag);




			desktop.toolBarEvent(toolBar);

		},

		toolBarEvent: function(toolBar){

			//Imageviewer on click
			toolBar.addEventListener("click", function(e){
				e.preventDefault();
				switch(e.target.id){
					case "imgViewer":

						/*var ImageViewer = require(["lib/modules/imageviewer"], function(ImageViewer){
							ImageViewer();
						});*/
						new ImageViewer(); 
						break;
				}
				

				//var ImageViewer = require(["lib/modules/imageviewer"]);
				//new ImageViewer(); 
			});
		}
	}

	return desktop;
});

		

		



	


	



