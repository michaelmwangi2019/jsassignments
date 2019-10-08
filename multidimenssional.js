var classaverage=0;
		var overalltotals=0;
		
		function calculatemarks(){
			var marks=[[],[]];
			var names=[];
			var	totals=0;
			var  studentaverage=0;
			
			

		for (var r=0; r<3; r++){
			totals=0;
			names[r]= prompt("Enter your Name","Name");
			console.log("your name is"+" "+names[r]);
			for (var c=0; c<3; c++){
			marks[r,c]= prompt("Enter your marks","marks");

			totals=totals+ parseInt(marks[r,c]);

			console.log("marks are" +" "+marks[r,c]);

		}
		console.log("The total marks: is"+" "+totals);
		studentaverage=(totals/3);
		console.log("subjects average"+" "+parseFloat(studentaverage.toFixed(2)));
	if (totals>=200){
				console.log("Student is above average");
			}
			else if (totals>=100) {
				console.log("Student is average");
			}
			else{
				console.log("Student is below average");
			}	
	
	overalltotals=overalltotals+totals;
	
}

console.log("The overall total marks: is"+" "+overalltotals);

}

function calculateaverage(){
	classaverage=overalltotals/3;

	if (classaverage>=200){
	console.log("The Class is Above average");
}
	else if (classaverage>=100) {
	console.log("The Class is Average")
	}
	else{
		console.log("The Class is below average");
		

	}
	console.log("The average for the classs is"+" "+parseFloat(classaverage.toFixed(2))+" "+"marks");
}
	
	/*average=totals/5;
			console.log("The average is:"+average+" "+"years");*/
		