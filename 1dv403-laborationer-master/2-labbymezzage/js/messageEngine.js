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

		//Creates divs and gets ids
		var post = document.createElement("div");
		var div = document.getElementById("messageArea");
		var postFunction = document.createElement("div");
		var imgClose = document.createElement("img");
		var aDelete = document.createElement("a");
		var imgTime = document.createElement("img");
		var aTime = document.createElement("a");
		var pText = document.createElement("p");
		var dateDiv = document.createElement("div");
		var pDate = document.createElement("p");
		
		//Sett attribute
		post.setAttribute("class", "post");
		postFunction.setAttribute("class", "postFunction");
		imgClose.setAttribute("src", "pics/delete.png");
		imgClose.setAttribute("alt", "Red round button with a cross on it.");
		imgTime.setAttribute("src", "pics/time.png");
		imgTime.setAttribute("alt", "a klock");
		aDelete.setAttribute("href", "#");
		aTime.setAttribute("href", "#");
		dateDiv.setAttribute("class", "theTime");
		
		//Delete image
		div.appendChild(post);
		post.appendChild(postFunction);
		postFunction.appendChild(aDelete);
		aDelete.appendChild(imgClose);

		aDelete.onclick = function(e){
			e.preventDefault();
			if( confirm("Vill du verkligen radera meddelandet?")){
				MessageBoard.removeMessage(messageID);
			}
			
		}
		
		//Time and date image
		postFunction.appendChild(aTime);
		aTime.appendChild(imgTime);

		aTime.onclick = function(e){
			e.preventDefault();
			MessageBoard.showTime(messageID);
		}

		//Creates text and date message
		pText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		post.appendChild(pText);

		pDate.innerHTML = MessageBoard.messages[messageID].getDateText();
		post.appendChild(dateDiv);
		dateDiv.appendChild(pDate);


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

/*

var myApp = {
	games : [],

	init : function (){
		games.push(new Memory());
	}
}

window.onload = function(){
	myApp.init();
}

*/