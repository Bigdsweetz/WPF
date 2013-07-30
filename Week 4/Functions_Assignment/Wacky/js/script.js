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


//Has the user input how much they plan on saving a month
var amount = prompt("Please enter how much you plan on entering?"); //Default will be dollars


var totalUSD = USD(amount);

    function USD() {
    var goal = 10000 / amount;
    return goal;//The return for this function in United States dollars
}
var totalYEN = YEN(amount);

    function YEN() {
    var yenAmt = amount * .98; //This converts to Japanese Yen
    var goal = 10000/yenAmt;
    return goal;
    }

var totalWON = WON (amount);

    function WON() {
    var wonAmt = 1112.14/ amount; //This converts to Korean currency
    var goal = 10000/wonAmt;
    return goal;
    }

var totalGBP = GBP(amount);

    function GBP() {
    var gbpAmt = amount * .65 ; //This converts to Great British Pound
    var goal = 10000/gbpAmt;
    return goal;
    }

var totalEUR = EUR(amount);

    function EUR() {
    var eurAmt = amount * .75; //This converts to European Euro
    var goal = 10000/eurAmt;
    return goal;
    }



//console.log(totalYEN)


if (currency == 1){
    {
        console.log("It will take " + totalUSD + " months to reach your goal.");
    }
}else if (currency == 2){
    {
        console.log("It will take " + totalYEN + " months to reach your goal.");
    }
}else if (currency == 3){
    {
        console.log("It will take " + totalWON + " months to reach your goal.");
    }
}else if (currency == 4){
    {
        console.log("It will take " + totalGBP + " months to reach your goal.");
    }
}else if (currency == 5){
    {
        console.log("It will take " + totalEUR + " months to reach your goal.");
    }
} else {
    console.log("The user hit a number not on the list or did not select a number");

}
