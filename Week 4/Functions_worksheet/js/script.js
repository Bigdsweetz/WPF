/* Douglas DJay Sweeting
 July 29 2013
 Expression Worksheet
 Functions Worksheet*/


function circumference(){

//radius of the circle
var radius = prompt ("What is the radius of the circle?");

//return circumference of the circle
var circumference = 3.14 * radius;

//result printed to console
console.log("The circumference of the circle is " + circumference + ".");
}



//Stung

// It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

function stung(){
// Victim’s weight (in pounds)
var weight = prompt ("What is your weight?");
/* Parameter(s) for function:
   Number of Bee Stings */


var killerb= 8.666666667 * weight;


//Result to print to the console:
console.log("It takes " + killerb +" bee stings to kill a "+ weight + " pound person.");
}

circumference();
stung();