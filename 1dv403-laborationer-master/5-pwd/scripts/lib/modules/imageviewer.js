"use strict";
define(["lib/modules/window"], function(window){
	var imgWindow = null; 
	
	var ImageViewer = function(){
		
		this.Id = Math.floor((Math.random() * 1000) + 1);
		var thumbnailURL; 


		this.createViewer = function(){
			//Create window
			imgWindow = document.createElement("div");
			imgWindow.setAttribute("class", "imgWindow");

			imgWindow.setAttribute("id", this.Id);

			document.getElementById("desktop").appendChild(imgWindow);

			//Create topbar
			var topBar = document.createElement("div");
			topBar.setAttribute("class", "topBar");

			imgWindow.appendChild(topBar);

			//Create topbar image
			var topImg = document.createElement("img");
			topImg.setAttribute("class", "topImg");
			topImg.setAttribute("src", "pics/imgview.png")

			topBar.appendChild(topImg);

			//Create topbar text
			var topTitle = document.createElement("p");
			topTitle.setAttribute("class", "topTitle");

			topBar.appendChild(topTitle);

			topTitle.innerHTML = "ImageViewer";

			//Create main
			var main = document.createElement("div");
			main.setAttribute("class", "main");
			main.setAttribute("id", "main");

			imgWindow.appendChild(main);

			//Create bottom bar
			var bottomBar = document.createElement("div");
			bottomBar.setAttribute("class", "bottomBar");

			imgWindow.appendChild(bottomBar);

			//Create close
			var close = document.createElement("div");
			close.setAttribute("class", "close");

			var closeA = document.createElement("a");
			closeA.setAttribute("class", "closeA");
			closeA.setAttribute("href", "#");

			var closeImg = document.createElement("img");
			closeImg.setAttribute("class", "closeImg");
			closeImg.setAttribute("src", "pics/close.png");

			topBar.appendChild(closeA);
			closeA.appendChild(close);
			close.appendChild(closeImg);
		}

		this.getImg = function(){
			var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
			var that = this;

			//Create loadin icon
			var main = imgWindow.querySelector(".main");
			
			var loadingDiv = document.createElement("div");
			loadingDiv.setAttribute("class", "loadingDiv");
			
			var loadingIcon = document.createElement("img");
			loadingIcon.src = "pics/load.gif";
			
			main.appendChild(loadingDiv);
			loadingDiv.appendChild(loadingIcon);

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4){
					if(xhr.status == 200){
						main.removeChild(loadingDiv);
						that.loadImg(JSON.parse(xhr.responseText));
					}
				} else {
					console.log("Läsfel, status:"+xhr.status);
				}
			}

			xhr.open("GET", url , true);
			xhr.send(null);
		}

		this.loadImg = function(response){
			var Window = document.getElementById(this.Id);
			var that = this;
			var main = Window.querySelector(".main");

			var thumbHeight = 0;
			var thumbWidth = 0;

			for(var i = 0; i < response.length; i+=1){

				var imgDiv = document.createElement("div");
				var aTag = document.createElement("a");
				var img = document.createElement("img");

				imgDiv.setAttribute("class", "imgDiv");
				aTag.setAttribute("href", "#");
				aTag.setAttribute("class", "aTag");
				img.setAttribute("src", response[i].thumbURL);
				img.setAttribute("class", "img");

				main.appendChild(imgDiv);
				imgDiv.appendChild(aTag);
				aTag.appendChild(img);

				//console.log(img);

				if(thumbHeight < response[i].thumbHeight){
					thumbHeight = response[i].thumbHeight;
				}

				if(thumbWidth < response[i].thumbWidth){
					thumbWidth =response[i].thumbWidth;
				}


				//Set biggest height and width
				imgDiv.style.height = thumbHeight+"px";
				imgDiv.style.width = thumbWidth+"px";

				aTag.addEventListener("click", function(e){
					e.preventDefault();
					var a = this
	    			that.changeBackground(a);
				});
			}
			
			that.windowEvent(Window);
		}

		this.changeBackground = function(e){
			//If you press the same thumbnail twice the original background appears
			if(e.firstChild.src == this.thumbnailURL){
				this.thumbnailURL = "pics/background.jpg";
				
			}else{
				this.thumbnailURL = e.firstChild.src;
			}

			document.getElementById("desktop").style.backgroundImage="url('"+this.thumbnailURL.replace('/thumbs', '')+"')";
		}

		this.windowEvent = function(windowID){
			var x, 
				y, 
				topBar = windowID.querySelector(".topBar"), 
				toolbar = document.getElementById("toolBar"), 
				closeWindow = windowID.querySelector(".closeA"), 
				desktop = document.getElementById("desktop"),
				maxTop = desktop.clientHeight - (windowID.offsetHeight + toolbar.offsetHeight),
				maxLeft = desktop.clientWidth - windowID.offsetWidth;
	
			closeWindow.addEventListener("click", closeWin, false);
			windowID.addEventListener("click", focus, false);
			topBar.addEventListener('mousedown', mouseDown, false);
    		document.body.addEventListener('mouseup', mouseUp, false);

			function focus(e){
				if(!e.target.parentElement.parentElement.className == closeWindow.className){
					desktop.removeChild(windowID);
					desktop.appendChild(windowID);
				}
			}
				
			function mouseUp(){
			    document.body.removeEventListener('mousemove', divMove, true);
			    topBar.style.cursor="default";
			}

			function mouseDown(e){
				x = e.clientX - parseInt(windowID.offsetLeft);
        		y = e.clientY - parseInt(windowID.offsetTop);

				topBar.style.cursor="move";
				y= e.clientY-parseInt(windowID.offsetTop);
				x= e.clientX-parseInt(windowID.offsetLeft);
				document.body.addEventListener('mousemove', divMove, true);
			}


			function divMove(e){
            	windowID.style.top = Math.max(Math.min((e.clientY - y), maxTop), 0) + "px";
                windowID.style.left = Math.max(Math.min((e.clientX - x), maxLeft), 0) + "px";   
			}

			function closeWin(){
				desktop.removeChild(windowID);
			}
		}

	this.createViewer();
	this.getImg();
	}
	return ImageViewer;
});
