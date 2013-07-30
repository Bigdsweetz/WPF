/* Douglas DJay Sweeting
 July 22 2013
 Expression Worksheet
 Personal Function*/


/* I want to take the dog to the vet and I
    need to know how much I'm going to spend*/

//Which dog am I taking
var choice = prompt("Which dog are you taking to the vet?\n" +
    "1. Cujo\n" +
    "2. Roxy\n");

choice = (choice == 1) ? "Cujo" : "Roxy";

//How much do they weigh?
var weight = prompt("How much does " + choice + " weigh?");
weight = (weight <= 70) ? 55 : 75;

//Shots? If so how many?
var shots = prompt("Does " + choice + " need shots?\n" +
    "1 for yes\n" +
    "2 for no.");

if (shots == 1){
var amountOfShots = prompt( "How many shots does" + choice + " need?");
function shots (){
    var amount = amountOfShots * 15;
    return amount;
}
shot = shots(amountOfShots);
}else{
    shot = 0;  //I know this is dangerous. The only difference here is the lack of an 'S'
}
//Clipping nails?
var clipping = prompt("Would you like to have " + choice + "'s nails cut?\n" +
    "1 for yes\n" +
    "2 for no.");
clipping = (clipping == 1) ? 25 : 0;
//Grooming?
var grooming = prompt("Would you like to have " + choice + " groomed?\n" +
    "1 for yes\n" +
    "2 for no.");
grooming = (grooming == 1) ? 15 : 0;
//Teeth?
var teeth = prompt("Do you want " + choice + " teeth cleaned?\n" +
    "1 for yes\n" +
    "2 for no.");
teeth = (teeth == 1) ? 10 : 0;

//Overall price
var overallPrice = weight + shot + clipping + grooming + teeth;
    console.log("The price for this visit will be $" + overallPrice + " dollars.");

