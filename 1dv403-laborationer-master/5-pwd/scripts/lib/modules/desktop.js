"use strict";

define(["lib/modules/imageviewer"], function(ImageViewer){
		

	var desktop = {

		init: function() {
			desktop.createToolBar();
		},

		createToolBar: function(){
			//Create desktop

			var desktopDiv = document.createElement("div");
			desktopDiv.setAttribute("id", "desktop");

			document.body.appendChild(desktopDiv);
			
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
						new ImageViewer(); 
						break;
				} 
			});
		}
	}

	return desktop;
});

		

		



	


	



