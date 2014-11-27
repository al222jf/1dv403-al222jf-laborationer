"use strict";

function Message(message, date){

	this.getText = function(){
		return message;
	}

	this.setText = function(_text){
		message = _text;
	}

	this.getDate = function(){
		return date;
	}

	this.setDate = function(_date){
		date = _date;
	}
}

Message.prototype.toString = function(){
	var date = this.getDate();
	var month = ["januari", "februari", "mars", "aprill", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];

	var day = date.getDate();
	var months = month[date.getMonth()];
	var year = date.getFullYear();

	var hour = Message.addZero(date.getHours());
	var minute = Message.addZero(date.getMinutes());
	var second = Message.addZero(date.getSeconds());

	return "Inlägget skapades den " + day +" "+ months+ " " + year + " klockan " + hour +":"+minute +":"+ second;
}

Message.prototype.getHTMLText = function() {
	return this.getText().replace(/[\n\r]/g, "<br />");
}



Message.prototype.getDateText = function(){
 	var currentDate = new Date();

 	var hours = Message.addZero(currentDate.getHours());
 	var minutes = Message.addZero(currentDate.getMinutes());
 	var seconds = Message.addZero(currentDate.getSeconds());

 	return hours +":"+ minutes +":"+ seconds;
}

Message.addZero = function(i){

	if(i < 10){

		i = "0" + i;
	}

	return i;
}

