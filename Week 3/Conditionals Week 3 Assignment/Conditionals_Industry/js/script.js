/* Douglas DJay Sweeting
 July 22 2013
 Expression Worksheet
 Conditional Industryy*/

/* This will be the cost of running a web design business
    The user will in put how many hours a week they work and
    how much they get paid by the hour.  Business expenses will
    be pre defined by me. The user will then be told if they make
    enough money to support the business or if they need to work
    more. */

var hoursWorked = prompt ("How many hours a week do you work?");
if (hoursWorked == null|| hoursWorked ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("I guess the user does not work at all");
}else{
    console.log("") }
var hourlyWage = prompt ("How much are you making an hour?");
    if (hourlyWage == null|| hourlyWage ==""){  //This verified if the user actually inputted one of the selection or skipped
        console.log("User must only do volunteer work");
    }else{
        console.log("")  }

var server = 20;
var rent = 450;
var util = 300;

var misc = prompt(" Any Misc expenses?");
if (misc == null|| misc==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("No misc expenses huh?");
}else{
    console.log("")}

var moneyIn = hourlyWage*hoursWorked;
var col = server+rent+util+misc;

if (col > moneyIn){
    console.log("If you don't start making more money, you're going to have a bad time.")
}else if (col == moneyIn){
    console.log("You are just breaking even. You might want to do something about that.")
}else {
    console.log("Keep up the good work!")
}