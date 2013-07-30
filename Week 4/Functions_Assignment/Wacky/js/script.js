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
var USD = prompt("Please enter how much you plan on entering?"); //United States Dollar
var YEN;
var WON;
var GBP;
var EUR;

if (currency == 1){
    var goal = 10000/USD;
    console.log("It will take " + goal + " months to reach your goal.");
}else if (currency == 2){
    YEN = USD * .98; //Japanese Yen
    var goal = 10000/YEN;
    console.log("It will take " + goal + " months to reach your goal.");
} else if (currency ==3){
    WON = USD * 1,112.14; //Korean currency
    var goal = 10000/WON;
    console.log("It will take " + goal + " months to reach your goal.");
}else if (currency ==4){
    GBP = USD * .65 ; //Great British Pound
    var goal = 10000/GBP;
    console.log("It will take " + goal + " months to reach your goal.");
}else if (currency ==5){
    EUR = USD * .75; //Europen Euro
    var goal = 10000/EUR;
    console.log("It will take " + goal + " months to reach your goal.");
}else {
 console.log("User did not choose a number in the list") //Going to make this a do while
}




//would you like to run the program again?