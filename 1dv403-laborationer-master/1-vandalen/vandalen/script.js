"use strict";

var makePerson = function(persArr){ 
	var result = {};
	
	//Plockar ut namnen, sorterar dom innan sätter ihop dom till.
	var names = persArr.map (function (name){ return name.name;}).sort(function(a, b) { return a.localeCompare(b) }).join(", ");

	//Plockar ut åldrarna
	var ages = persArr.map(function (age){ return age.age;});
	
	//Lägger ihop alla åldrar för att få fran medelåldern
	var averageAge = ages.reduce(function(a,b){ return a+b;});
	averageAge /= ages.length;

	//Avrundar
	averageAge = Math.round(averageAge);

	//Hämtar ut max och mini ålder ur ages array
	var maxAge = Math.max.apply(Math, ages);
	var minAge = Math.min.apply(Math, ages);

	//Lägger in i objektet
	result.minAge =  minAge;
	result.maxAge = maxAge;
	result.averageAge = averageAge
	result.names = names;
	
	return result;
}; 

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var names = data.map (function (name){ return name.name;});
var ages = data.map(function (ages){ return ages.age;});

//Kollar om det är strängar
names = names.every(function isString(value, index, array){ 
	if (typeof value === "string") { 
		return true;
	} else { 
		console.log("Något är inte en sträng!"); 
		return false; 
	};
});

//kollar om det är typ number och heltal
ages = ages.every(function isInteger(value, index, array){
	if (typeof value === "number") {
		if (value % 1 === 0) {
			return true;
		} else {
			console.log("Något är inte ett heltal!");
			return false;
		};
	} else {
		console.log("Något är inte ett nummer!");
		return false;
	};
});

//Om båda är sanna kör funktionen
if (names === true && ages === true) {
	var result = makePerson(data);
	console.log(result);
};