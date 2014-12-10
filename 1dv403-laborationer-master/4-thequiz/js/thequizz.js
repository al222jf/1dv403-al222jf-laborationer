"use strict";

var quizz ={
	questionURL: "http://vhost3.lnu.se:20080/question/1",
	answerURL: null,
	response: [],
	numberOfTries: [],
	counter: 0,

	init: function(){
		

		var sub = document.getElementById("buttonBefore");
		sub.onclick = function(){
			sub.setAttribute("value", "Skicka!");
			quizz.createElements();
			quizz.getQuestion();
		}
	},
	createElements: function(){
		var question = document.getElementById("question");
		var p = document.createElement("p");
		var textarea = document.createElement("textarea");
		var wrapper = document.getElementById("wrapperBefore");
		var button = document.getElementById("buttonBefore");

		textarea.setAttribute("id", "answer");
		textarea.setAttribute("rows", "1");
		textarea.setAttribute("cols", "25");
		textarea.setAttribute("placeholder", "Skriv ditt svar här...");
		p.setAttribute("class", "p");
		p.setAttribute("id", "p");


		question.appendChild(p);
		wrapper.insertBefore(textarea, wrapper.childNodes[0]);

		wrapper.setAttribute("id", "wrapperAfter");
		button.setAttribute("id", "buttonAfter");
	},

	getQuestion: function(){
		console.log(quizz.numberOfTries);
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status == 200){
					quizz.response = JSON.parse(xhr.responseText);
					console.log(xhr.responseText);
					quizz.displayQuestion(JSON.parse(xhr.responseText));
					quizz.postAnswer(JSON.parse(xhr.responseText));
				}
			} else {
				console.log("Läsfel, status:"+xhr.status);
			}
		}

		xhr.open("GET", quizz.questionURL , true);
		xhr.send(null);
	},

	postAnswer: function(url){
		var answer = document.getElementById("answer");
		var sub = document.getElementById("buttonAfter");

		sub.onclick = function(){
			quizz.counter+=1;
			var xhr = new XMLHttpRequest();
			var returnText;
			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4){
					if(xhr.status == 200){
						quizz.response = JSON.parse(xhr.responseText);
						
						quizz.numberOfTries.push(quizz.counter);
						quizz.counter = 0;

						if("nextURL" in quizz.response){

							quizz.displayQuestion(JSON.parse(xhr.responseText));
							quizz.questionURL = quizz.response.nextURL;
							setTimeout(function(){
								quizz.clearText();
								quizz.getQuestion();
							}, 1000);
						} else {
							quizz.clearText();
							quizz.theEnd();
						}
					} else {
						quizz.wrongAnswer(quizz.response);
						}
				} else {

					console.log("Läsfel, status:"+xhr.status);
				}
			}
			
			xhr.open("POST", url.nextURL , true);
			xhr.setRequestHeader("Content-Type", "application/json");
			returnText = {
				"answer": answer.value
			}
			xhr.send(JSON.stringify(returnText)); 

			

		}
	},

	displayQuestion: function(responseText){
		var text = document.querySelector(".p");
		
		if("question" in responseText){
			text.innerHTML = responseText.question;
		} else {
			text.innerHTML = responseText.message;
		}
	},


	wrongAnswer: function(){
		var text = document.getElementById("p");
		text.innerHTML = "Wrong answer! Try again."
		setTimeout(function(){
			text.innerHTML = quizz.response.question;
		}, 700);
	},

	clearText: function(){
		var textarea = document.getElementById("answer");
		textarea.value = "";
	},

	theEnd: function(){
		var text = document.querySelector(".p");
		text.innerHTML = "";
		var q = document.getElementById("question");

		for (var i = 0; i < quizz.numberOfTries.length; i+=1) {
			var p = document.createElement("p");
			q.appendChild(p);
			p.innerHTML = "Fråga nr "+(i+1)+" tog "+quizz.numberOfTries[i]+" försök.";
		};
	}
}


window.onload = quizz.init;