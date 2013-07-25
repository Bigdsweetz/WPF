/* Douglas DJay Sweeting
 July 22 2013
 Expression Worksheet
 Conditional Wacky*/

/*I originally wanted to do light years and things like that but it turned out to be a lot bigger then I thought.
    So I ended up doing distance from NY to a location and how long it would take you to get there. */

//Speeds

var running = 28;
var walking = 3;
var biking = 167;
var spiritOfAmerica = 555;
var seaplane = 350;
var boeing = 750;
var concord = 3500;
var spaceShuttle = 7000;
var thrust = 760;

//Distance

var california = 2913;
var unitedKingdom = 3335;
var japan = 6737;
var beijing = 6837;

var time;
//Math = Vehicle/Distance

var choiceA = prompt("Where would you like to go from New York? \n" +
    "1.)California\n" +
    "2.)United Kingdom\n" +
    "3.)Japan\n" +
    "4.)Beijing");

if (choiceA == null|| choiceA ==""){
console.log("No choice was selected for destination!");
}else{
    console.log("a number not on the list was picked")
}


var choiceB = prompt("How are you getting there? \n" +
    "1.)running\n" +
    "2.)walking\n" +
    "3.)biking\n" +
    "4.)Spirit of America\n" +
    "5.)A seaplane\n" +
    "6.)Boeing 747\n" +
    "7.)Concord\n" +
    "8.)Space Shuttle\n" +
    "9.)Thrust SSC");

if (choiceB == null|| choiceB =="") {
    console.log("No choice was selected for means of transportation!");
}
    else{
    console.log("A number not on the list was picked")
}


if (choiceA == 1 && choiceB ==1){
    time = california/running
    console.log("It will take you " + time + " hours to get to California");

}   else if(choiceA == 1 && choiceB ==2){
    time = california/walking
    console.log("It will take you " + time + " hours to get to California");

}    else if(choiceA == 1 && choiceB ==3){
    time = california/biking
    console.log("It will take you " + time + " hours to get to California");

}    else if(choiceA == 1 && choiceB ==4){
    time = california/spiritOfAmerica
    console.log("It will take you " + time + " hours to get to California");

}    else if(choiceA == 1 && choiceB ==5){
    time = california/seaplane
    console.log("It will take you " + time + " hours to get to California");

}    else if(choiceA == 1 && choiceB ==6){
    time = california/boeing
    console.log("It will take you " + time + " hours to get to California");

}    else if(choiceA == 1 && choiceB ==7){
    time = california/concord
    console.log("It will take you " + time + " hours to get to California");

}    else if(choiceA == 1 && choiceB ==8){
    time = california/spaceShuttle
    console.log("It will take you " + time + " hours to get to California");

}    else if(choiceA == 1 && choiceB ==9){
    time = california/thrust
    console.log("It will take you " + time + " hours to get to California");

}    else if (choiceA == 2 && choiceB ==1){
    time = unitedKingdom/running
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}   else if(choiceA == 2 && choiceB ==2){
    time = unitedKingdom/walking
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}    else if(choiceA == 2 && choiceB ==3){
    time = unitedKingdom/biking
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}    else if(choiceA == 2 && choiceB ==4){
    time = unitedKingdom/spiritOfAmerica
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}    else if(choiceA == 2 && choiceB ==5){
    time = unitedKingdom/seaplane
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}    else if(choiceA == 2 && choiceB ==6){
    time = unitedKingdom/boeing
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}    else if(choiceA == 2 && choiceB ==7){
    time = unitedKingdom/concord
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}    else if(choiceA == 2 && choiceB ==8){
    time = unitedKingdom/spaceShuttle
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}    else if(choiceA == 2 && choiceB ==9){
    time = unitedKingdom/thrust
    console.log("It will take you " + time + " hours to get to the United Kingdom");

}   else if (choiceA == 3 && choiceB ==1){
    time = japan/running
    console.log("It will take you " + time + " hours to get to Japan");

}   else if(choiceA == 3 && choiceB ==2){
    time = japan/walking
    console.log("It will take you " + time + " hours to get to Japan");

}    else if(choiceA == 3 && choiceB ==3){
    time = japan/biking
    console.log("It will take you " + time + " hours to get to Japan");

}    else if(choiceA == 3 && choiceB ==4){
    time = japan/spiritOfAmerica
    console.log("It will take you " + time + " hours to get to Japan");

}    else if(choiceA == 3 && choiceB ==5){
    time = japan/seaplane
    console.log("It will take you " + time + " hours to get to Japan");

}    else if(choiceA == 3 && choiceB ==6){
    time = japan/boeing
    console.log("It will take you " + time + " hours to get to Japan");

}    else if(choiceA == 3 && choiceB ==7){
    ctime = japan/concord
    console.log("It will take you " + time + " hours to get to Japan");

}    else if(choiceA == 3 && choiceB ==8){
    time = japan/spaceShuttle
    console.log("It will take you " + time + " hours to get to Japan");

}    else if(choiceA == 3 && choiceB ==9){
    time = japan/thrust
    console.log("It will take you " + time + " hours to get to Japan");

}    else if (choiceA == 4 && choiceB ==1){
    time = beijing/running
    console.log("It will take you " + time + " hours to get to Beijing");

}   else if(choiceA == 4 && choiceB ==2){
    time = beijing/walking
    console.log("It will take you " + time + " hours to get to Beijing");

}    else if(choiceA == 4 && choiceB ==3){
    time = beijing/biking
    console.log("It will take you " + time + " hours to get to Beijing");

}    else if(choiceA == 4 && choiceB ==4){
    time = beijing/spiritOfAmerica
    console.log("It will take you " + time + " hours to get to Beijing");

}    else if(choiceA == 4 && choiceB ==5){
    time = beijing/seaplane
    console.log("It will take you " + time + " hours to get to Beijing");

}    else if(choiceA == 4 && choiceB ==6){
    time = beijing/boeing
    console.log("It will take you " + time + " hours to get to Beijing");

}    else if(choiceA == 4 && choiceB ==7){
    time = beijing/concord
    console.log("It will take you " + time + " hours to get to Beijing");

}    else if(choiceA == 4 && choiceB ==8){
    time = beijing/spaceShuttle
    console.log("It will take you " + time + " hours to get to Beijing");

}    else if(choiceA == 4 && choiceB ==9){
    time = beijing/thrust
    console.log("It will take you " + time + " hours to get to Beijing");

}else
    console.log("You should not see this");