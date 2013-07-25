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

var moneyIn = prompt ("How much a month are you making?");
var gasEle = prompt ("How much is your electric bill monthly?");
var water = prompt ("What is your water bill monthly?");
var cable = prompt ("How much do you pay for cable?");
var cell = prompt ("How about a cell phone?");
var food = prompt ("How much do you spend on food?");
var gas = prompt ("How much do you spend on gas monthly?");
var tripMoney = prompt ("How much do you need for your trip?");



var result = moneyIn - gasEle - water - cable - cell -food - gas;
var pot = tripMoney - result;

//This is my interjection of a Ternary operators
 (tripMoney > pot)? console.log("You need $" + pot + " dollars to go on your trip") : console.log("You got money in the bank. Go!");

