"use strict";
define(["lib/modules/window"], function(window){
	var imgWindow = null; 
	
	var ImageViewer = function(){
		
		this.Id = Math.floor((Math.random() * 1000) + 1);

		this.createViewer = function(){
			//Create window
			imgWindow = document.createElement("div");
			imgWindow.setAttribute("class", "imgWindow");

			imgWindow.setAttribute("id", this.Id);

			document.body.appendChild(imgWindow);

			//Create topbar
			var topBar = document.createElement("div");
			topBar.setAttribute("class", "topBar");

			imgWindow.appendChild(topBar);

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

			topBar.appendChild(closeA);
			closeA.appendChild(close);
		}

		this.getImg = function(){
			var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
			var that = this;


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
			var closeWindow = Window.querySelector(".closeA");
			//var main = document.getElementById("main");

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

				aTag.addEventListener("click", function(){
					var a = this
	    			that.changeBackground(a);
				});
			}

			closeWindow.addEventListener("click", function(){
				that.closeWin(that.Id);
			})

			that.moveWindow();
		}

		this.changeBackground = function(a){

			var thumbnailURL = a.firstChild.src;
			thumbnailURL = thumbnailURL.replace('/thumbs', '');
			document.body.style.backgroundImage="url('"+thumbnailURL+"')";
			
		}

		this.closeWin = function(ID){
			
			var mainWindow = document.getElementById(ID);
			document.body.removeChild(mainWindow);
		}

		this.moveWindow = function(){
			var offX;
			var offY;
			var Window = document.getElementById(this.Id);
			var topBar = Window.querySelector(".topBar");

			topBar.addEventListener('mousedown', mouseDown, false);
    		document.body.addEventListener('mouseup', mouseUp, false);
				
			function mouseUp(){
			    document.body.removeEventListener('mousemove', divMove, true);
			}

			function mouseDown(e){
				offY= e.clientY-parseInt(Window.offsetTop);
				offX= e.clientX-parseInt(Window.offsetLeft);
				document.body.addEventListener('mousemove', divMove, true);
			}


			function divMove(e){
			  Window.style.position = 'absolute';
			  Window.style.top = (e.clientY-offY) + 'px';
			  Window.style.left = (e.clientX-offX) + 'px';
			}
		}

	this.createViewer();
	this.getImg();
	}
	return ImageViewer;
});
