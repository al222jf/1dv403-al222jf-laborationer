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

		var div = document.getElementById("messageArea");
		var text2 = document.createElement("p");
		text2.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		div.appendChild(text2);
	}
}



window.onload = MessageBoard.init;

