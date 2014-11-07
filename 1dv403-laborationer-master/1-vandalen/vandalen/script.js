"use strict";


var makePerson = function(persArr){ 
	var result = {};
	var isString;
	var isInteger;
	var i;
	

	//Plockar ut namnen, sorterar dom innan sätter ihop dom till.
	var names = persArr.map (function (person){ return person.name;}).sort(function(a, b) { return a.localeCompare(b) }).join(", ");

	//Plockar ut åldrarna
	var ages = persArr.map(function (ages){ return ages.age;});
	
	//Lägger ihop alla åldrar för att få fran medelåldern
	var averageAge = ages.reduce(function(a,b){ return a+b;});
	averageAge /= ages.length;

	//Avrundar
	averageAge = Math.round(averageAge);

	//Hämtar ut max och mini ålder ur ages array
	var maxAge = Math.max.apply(Math, ages);
	var minAge = Math.min.apply(Math, ages);

	//Lägger in i objects
	result.minAge =  minAge;
	result.maxAge = maxAge;
	result.averageAge = averageAge
	result.names = names;
	
	return result;
}; 

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}, {name: "Adam Lundberg", age: 23}];
var names = data.map (function (person){ return person.name;});
var ages = data.map(function (ages){ return ages.age;});

var i;
var isString;
var isInteger;

for (i = 0; i < names.length; i+=1) {
		
		if(typeof names[i] === "string"){

			isString = true;
		} else {
			isString = false
			console.log("Något är inte en string!");
			break;
		};
	};

	if (isString === true) {
		for (i = 0; i < ages.length; i+=1) {
			
			if (typeof ages[i] === "number") {
				
				if(ages[i] % 1 === 0){
					isInteger = true;
				} else {
					isInteger = false;
					break;
				};
			} else {
				isInteger = false;
				console.log("Något är inte heltal!");
				break;
			};
		};
	};

if (isString === true && isInteger === true) {
	var result = makePerson(data);
	console.log(result);
};