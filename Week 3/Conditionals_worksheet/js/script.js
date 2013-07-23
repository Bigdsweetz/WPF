/* Douglas DJay Sweeting
 July 22 2013
 Expression Worksheet
 Expressions with Conditional*/


//Last Chance for Gas


//This is the reading the user inputs for the gas
var gasTank = prompt ("What percentage of fuel do you have left?");

// This is how efficient the car is with gas
var mpg = 20;

//This is the max amount of gas this vehicle holds
var maxGallans = 21;

//This converts the percentage of gas in the car
var gasInCar = gasTank / 100;

//This tell you how gas in gallows the car has left
var totalMilesLeft = maxGallans * gasInCar;

//This shows to total amount of miles the driver can go on the current tank
var totalMiles = totalMilesLeft * mpg;


/* This is a simple equation. By finding the total amount of miles the driver can go on the current tank
This lets the driver know if they are going to make it, or if they will need to get more fuel.*/
if (totalMiles > 200)
    console.log("You can do it! You can go ALL night LONG!");
else
    console.log("You only have " + (totalMiles) + " miles to empty. \n You need to gas up");



//Grade Letter Calculator

var grade = prompt ("What is your end of course grade as a whole number");
    //If the grade is 95 or better, it's an A+
if (grade  >= 95){
    console.log("You received a " + grade + " which is an A+");
    //If the grade is greater then 89 but less then 95, it's an A

}   else if(grade <=94 && grade >=90){
    console.log("You received a " + grade + " which results in an A.");
    //If the grade is greater then 84 but less then 90, it's an B+

}    else if(grade <=89 && grade >=85){
    console.log("You received a " + grade + " which results in a B+.");
    //If the grade is greater then 79 but less then 85, it's an B

}    else if(grade <=84 && grade >=80){
    console.log("You received a " + grade + " which results in a B.");
    //If the grade is greater then 75 but less then 80, it's an C+

}    else if(grade <=79 && grade >=76){
    console.log("You received a " + grade + " which results in a C+.");
    //If the grade is greater then 72 but less then 76, it's an C

}    else if(grade <=75 && grade >=73){
    console.log("You received a " + grade + " which results in a C.");
    //If the grade is greater then 69 but less then 73, it's an D

}    else if(grade <=72  && grade>=70){
    console.log("You received a " + grade + " which results in a D.");
    //This returns a failure

}    else
    console.log("You received a " + grade + " which results is a failure.");


//Tire Pressure I

var tirePressure = [0 , 1, 2, 3]; //Initializing an array.
//Input for front right tire
tirePressure [0] = prompt ("What is the PSI of your right front tire?");

//Input for front left tire
tirePressure [1] = prompt ("What is the PSI of your left front tire?");

//Input for rear right tire
tirePressure [2] = prompt ("What is the PSI of your right rear tire?");

//Input for rear left tire
tirePressure [3] = prompt ("What is the PSI of your left rear tire?");


if (tirePressure [0] == tirePressure[1] && tirePressure[2] == tirePressure[3]){
    console.log("You Pass!");
}else
    console.log("You have failed.");