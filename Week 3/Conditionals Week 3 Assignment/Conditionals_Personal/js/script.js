/* Douglas DJay Sweeting
 July 22 2013
 Expression Worksheet
 EConditionals Personal*/

/*This will be a budget. The Variables will be
    Money in
    Gas/Electricity
    Water
    Cable/Internet
    Cell Phone
    Food
    Gas

    Also included will be how much money is needed for a trip which the user will input
    After going through the monthly bill the output will tell if the user will be able to go
    on the trip they  planned or if they are going to come up short. */

var moneyIn = prompt ("How much a month are you making?");  //User inputs monthly salary
if (moneyIn == null|| moneyIn ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("No input for money made!");
}else{
    console.log("")
}
var gasEle = prompt ("How much is your electric bill monthly?"); //User inputs monthly electricity bill
if (gasEle == null|| gasEle ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("No input for electric bill");
}else{
    console.log("")
}
var water = prompt ("What is your water bill monthly?"); //User inputs monthly water bill

if (water == null|| water ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("No input for water bill");
}else{
    console.log("")
}
var cable = prompt ("How much do you pay for cable?"); //User inputs monthly cable bill
if (cable == null|| cable ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("No input for cable");
}else{
    console.log("")
}
var cell = prompt ("How about a cell phone?"); //User inputs monthly cell phone bill
if (cell== null|| cell ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("No input for cell phone");
}else{
    console.log("")
}
var food = prompt ("How much do you spend on food?"); //User inputs monthly food
if (food == null|| food ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("No input for food.");
}else{
    console.log("")
}
var gas = prompt ("How much do you spend on gas monthly?"); //User inputs monthly gas usage
if (gas == null|| gas ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("No input for gas...must ride a bike");
}else{
    console.log("")
}
//User inputs how much money they are going to need for their trip
var tripMoney = prompt ("How much do you need for your trip?");
if (tripMoney == null|| tripMoney ==""){  //This verified if the user actually inputted one of the selection or skipped
    console.log("Guess we're just not going on a trip eh?");
}else{
    console.log("")
}

//simple equation to figure out left over money
var result = moneyIn - gasEle - water - cable - cell -food - gas;

//How much is needed after this month to take that trip
var pot = tripMoney - result;

//This is my interjection of a Ternary operators
 (tripMoney > pot)? console.log("You need $" + pot + " dollars to go on your trip") : console.log("You got money in the bank. Go!");

