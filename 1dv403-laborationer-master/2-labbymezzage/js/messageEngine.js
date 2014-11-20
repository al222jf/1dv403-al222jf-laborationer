"use strict"

var MessageBoard  = {

	messages: [],

	init:function(e){
		//alert(mess);
		//mess.setText("En annan text");
		//alert(mess);
		//messages.push(mess);
		MessageBoard.messages.push("meddelande");

		var submit = document.getElementById("button");
		submit.onclick = function(){
			var text = document.querySelector("textarea").value;
			//alert(text);
			MessageBoard.messages.push(text);
			console.log(MessageBoard.messages);
			
			renderMessages();
		}
			alert(MessageBoard.messages);
	}
}



window.onload = MessageBoard.init;

