"use strict";


	var makePerson = function(persArr){ 
		var result = {};
		

		//Plockar ut namnen, sorterar dom innan sätter ihop dom till.
		var names = persArr.map(function (person){ return person.name;}).sort(function(a, b) { return a.localeCompare(b) }).join(", ");
		
		//Plockar ut åldrarna
		var ages = persArr.map(function (ages){ return ages.age;});
		
		//Kollar antalet åldrar
		var numberOfAges = ages.length;

		//Lägger ihop alla åldrar för att få fran medelåldern
		var averageAge = ages.reduce(function(a,b){ return a+b;});
		averageAge /= numberOfAges;
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
	var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

	var result = makePerson(data);



console.log(result);