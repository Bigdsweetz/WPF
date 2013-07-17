/* Douglas DJay Sweeting
 July 17 2013
 Expression Personal Worksheet  */

//How much concrete do I need to pour a floor for the basement

alert("This program will tell you how much concrete you would need for your basement.");  //Tells the user what the program is
var depth = prompt (" What is the depth in inches");//has the user input the depth in inches
var width = prompt (" What is the width in feet");//has the user input the width in feet
var length = prompt ("What is the length in feet"); //has the user input the length in feet

//The equation for cubic yards
var cubed = ( depth * width * length ) /  27;

//The message to the user with the correct answer
alert("You would need " + parseInt(cubed) + " cubic yards of concrete is needed. \n" +
    "All conversions were rounded off to the nearest whole number.");
