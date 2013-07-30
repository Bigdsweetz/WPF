/* Douglas DJay Sweeting
 July 29 2013
 Expression Worksheet
 Wacky*/


/* How long would it take to save 10,000 USD.
    Also, what currency will you be using
    How much do you want to put away per month? */


//How much are you going to save a month
var currency = prompt("Please enter what currency you are using?");

//What currency are you using
var USD = prompt("Please enter how much you plan on entering?"); //United States Dollar
var YEN;
var WON;
var GBP;
var EUR;

if (currency == 1){
console.log();
}else if (currency == 2){
YEN = USD * .98; //Japanese Yen
console.log ();
} else if (currency ==3){
WON = USD * 1,112.14; //Korean currency
console.log();
}else if (currency ==4){
GBP = USD * .65 ; //Great British Pound
console.log();
}else if (currency ==5){
EUR = USD * .75; //Europen Euro
console.log();
}else {
 console.log("User did not choose a number in the list")
}




//would you like to run the program again?