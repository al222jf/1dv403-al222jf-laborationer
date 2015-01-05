"use strict";

		//Body background image
		document.body.style.backgroundImage="url('http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/pics/1050509.jpg')";
		
		//Toolbar div
		var toolBar = document.createElement("div");
		toolBar.setAttribute("id", "toolBar");
		document.body.appendChild(toolBar);

		//Imageviewer 
		var imgViewerAtag = document.createElement("a");
		var imgViewerImgTag = document.createElement("img");

		imgViewerAtag.setAttribute("href", "#");
		imgViewerImgTag.setAttribute("src", "pics/imgview.png");
		imgViewerImgTag.setAttribute("class", "icons");

		toolBar.appendChild(imgViewerAtag);
		imgViewerAtag.appendChild(imgViewerImgTag);

		//Imageviewer on click
		imgViewerAtag.addEventListener("click", function(){
			require(["lib/modules/imageviewer"]);
		});



	


	



