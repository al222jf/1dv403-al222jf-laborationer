"use strict"

var MessageBoard  = {

	messages: [],

	init:function(){

		var submit = document.getElementById("button");
		submit.onclick = MessageBoard.getMessages;
	},

	getMessages: function(){
		
		var text = document.getElementById("textarea");

		MessageBoard.messages.push( new Message(text.value, new Date()));
		console.log(MessageBoard.messages);
		var lastPost = MessageBoard.messages.length - 1;
		MessageBoard.renderMessage(lastPost);
	},
	
	renderMessage: function(messageID){
		var number = messageID + 1;
		

		var numberOfPosts = document.getElementById("numberOfMess");
		numberOfPosts.innerHTML = "Antal Meddelande: " +  number;
		console.log(number);


		var post = document.createElement("div");
		post.setAttribute("class", "post");

		var div = document.getElementById("messageArea");

		var imgClose = document.createElement("img");
		imgClose.setAttribute("src", "pics/delete.png");
		imgClose.setAttribute("alt", "Red round button with a cross on it.");
		div.appendChild(post);
		post.appendChild(imgClose);

		imgClose.onclick = function(){
			MessageBoard.removeMessage(messageID);
		}
		
		var text2 = document.createElement("p");
		text2.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		div.appendChild(post);
		post.appendChild(text2);

		var dateDiv = document.createElement("div");
		dateDiv.setAttribute("class", "theTime");

		var dateTag = document.createElement("p");
		dateTag.innerHTML = MessageBoard.messages[messageID].getDateText();
		div.appendChild(post);
		post.appendChild(dateDiv);
		dateDiv.appendChild(dateTag);


		MessageBoard.updateScroll();
	},

	removeMessage: function(messageID){
		MessageBoard.messages.splice(messageID, 1);
	},

	updateScroll: function(){
		var element = document.getElementById("messageArea");
    	element.scrollTop = element.scrollHeight;
	}
}



window.onload = MessageBoard.init;

