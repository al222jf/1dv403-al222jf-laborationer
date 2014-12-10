"use strict";

function quizz(){

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status == 200){
				console.log(xhr.responseText);
			}
		} else {
			console.log("Läsfel, status:"+xhr.status);
		}
	}

	xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
	xhr.send(null);
}


window.onload = quizz;
/*
var xhr = new XMLHttpRequest();

xhr.onreadystatechanged = function(){
	if(xhr.readyState === 4){
		if(xhr.status == 200){
			console.log(xhr.responseText);
		}
	} else {
		console.log("Läsfel, status:"+xhr.status);
	}
}*/