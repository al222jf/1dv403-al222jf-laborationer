"use strict";

var myApp = {

	messages: [],
	console.log(messages);
	init:function(e){
		var mess = new Message("Testmeddelande", new Date());

		alert(mess);
		mess.setText("En annan text");
		alert(mess);
		messages.push(mess);
	}
}

window.onload = myApp.init;