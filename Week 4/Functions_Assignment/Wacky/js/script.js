/* Douglas DJay Sweeting
 July 29 2013
 Expression Worksheet
 Wacky*/


/* How long would it take to save 10,000 USD.
    Also, what currency will you be using
    How much do you want to put away per month? */

//What Currency are you using
var currency = prompt("Please enter what currency you are using?\n" +
    "1 United States Dollars\n" +
    "2 Japanese Yen\n" +
    "3 Korean Won\n" +
    "4 Great British Pound\n" +
    "5 European Euro\n");


//What currency are you using
var amount = prompt("Please enter how much you plan on entering?"); //United States Dollar


var totalUSD = USD(amount);
    function USD() {
    var goal = 10000 / amount;
    return goal;//The return for this function
}
var totalYEN = YEN(amount);
    function YEN() {
    var yenAmt = amount * .98; //Japanese Yen
    var goal = 10000/yenAmt;
    return goal;
    }

var totalWON = WON (amount);
    function WON() {
    var wonAmt = amount * 1112.14; //Korean currency
    var goal = 10000/wonAmt;
    return goal;
    }

var totalGBP = GBP(amount);
    function GBP() {
    var gbpAmt = amount * .65 ; //Great British Pound
    var goal = 10000/gbpAmt;
    return goal;
    }

var totalEUR = EUR(amount);
    function EUR() {
    var eurAmt = amount * .75; //European Euro
    var goal = 10000/eurAmt;
    return goal;
    }


/*
if (currency = 1){
    function USD(amount){
        console.log("It will take " + totalUSD + " months to reach your goal.");
    }
}else if (currency = 2){
    function YEN(USD){
        console.log("It will take " + totalYEN + " months to reach your goal.");
    }
}else if (currency = 3){
    function WON(USD){
        console.log("It will take " + totalWON + " months to reach your goal.");
    }
}else if (currency = 4){
    function GBP(USD){
        console.log("It will take " + totalGBP + " months to reach your goal.");
    }
}else if (currency = 5){
    function EUR(USD){
        console.log("It will take " + totalEUR + " months to reach your goal.");
    }
}
 */
/*Create the if else part as functions and then call them in side of a giant Do While loop asking if you want to run
 * the program again. */


//would you like to run the program again?