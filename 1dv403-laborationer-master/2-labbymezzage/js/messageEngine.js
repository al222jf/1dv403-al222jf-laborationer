"use strict"

var MessageBoard  = {

	messages: [],

	init:function(){

		var submit = document.getElementById("button");
		var textarea = document.getElementById("textarea");

		

			textarea.addEventListener("keypress", function(e){
				if(!e){ e = window.event; }

				if(e.keyCode == 13 && !e.shiftKey){
					e.preventDefault();
					MessageBoard.getMessages();
				}
			});
			submit.onclick = MessageBoard.getMessages;

	},

	getMessages: function(){
		
		var text = document.getElementById("textarea");

		if( text.value != ""){
			MessageBoard.messages.push( new Message(text.value, new Date()));
			var lastPost = MessageBoard.messages.length - 1;
			MessageBoard.renderMessage(lastPost);
			MessageBoard.counter();

			text.value = "";
		}
		
	},
	
	renderMessage: function(messageID){

		var post = document.createElement("div");
		post.setAttribute("class", "post");

		var div = document.getElementById("messageArea");

		var postFunction = document.createElement("div");
		postFunction.setAttribute("class", "postFunction");
		//Delete image
		var imgClose = document.createElement("img");
		imgClose.setAttribute("src", "pics/delete.png");
		imgClose.setAttribute("alt", "Red round button with a cross on it.");
		var a = document.createElement("a");
		a.setAttribute("href", "#");
		div.appendChild(post);
		post.appendChild(postFunction);
		postFunction.appendChild(a);
		a.appendChild(imgClose);


		imgClose.onclick = function(){
			if( confirm("Vill du verkligen radera meddelandet?")){
				MessageBoard.removeMessage(messageID);
			}
			
		}
		
		//Time and date image
		var imgTime = document.createElement("img");
		imgTime.setAttribute("src", "pics/time.png");
		imgTime.setAttribute("alt", "a klock");
		a.appendChild(imgTime);

		imgTime.onclick = function(){
			MessageBoard.showTime(messageID);
		}

		var text2 = document.createElement("p");
		text2.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		post.appendChild(text2);

		var dateDiv = document.createElement("div");
		dateDiv.setAttribute("class", "theTime");

		var dateTag = document.createElement("p");
		dateTag.innerHTML = MessageBoard.messages[messageID].getDateText();
		post.appendChild(dateDiv);
		dateDiv.appendChild(dateTag);


		MessageBoard.updateScroll();
	},

	renderMessages: function(){
		//Remove all messages
		document.getElementById("messageArea").innerHTML = "";

		//Render all messages
		for (var i = 0; i < MessageBoard.messages.length; i++) {
			MessageBoard.renderMessage(i);
		};
	},

	removeMessage: function(messageID){
		
		MessageBoard.messages.splice(messageID, 1);
		MessageBoard.renderMessages();
		MessageBoard.counter();
	},

	showTime: function(messageID){

		alert(MessageBoard.messages[messageID].toString());
	},

	counter: function(){

		var count = MessageBoard.messages.length;

		var numberOfPosts = document.getElementById("numberOfMess");
		numberOfPosts.innerHTML = "Antal Meddelanden: " +  count;
	},

	updateScroll: function(){

		var element = document.getElementById("messageArea");
    	element.scrollTop = element.scrollHeight;
	}
}

window.onload = MessageBoard.init;

