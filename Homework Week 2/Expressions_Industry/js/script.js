/* Douglas DJay Sweeting
 July 16 2013
 Expression Worksheet
 The Divine Proportion and the rule of Thirds
 Expressions Industry*/


//X px / 1.617 = y px is the devin ratio
var pixelWidth = prompt ("What is the total width in pixels");  //user will input the width in pixels
var pixelHeight = prompt ("What is the total height in pixels");//user will input the height in pixels
var divineProportion = parseInt(pixelWidth / 1.618); //This computes the golden ratio
var divineAnswer = pixelWidth - divineProportion;
//The below shows the user what the divine ratio should be.
alert("Your Divine Proportion from " + pixelWidth + " is " + divineProportion + " pixels wide " + divineAnswer + " pixels wide " );

//according to the rule of 3rds
var thirdWidth = pixelWidth / 3; //This will take the pixel width and cut it into 3rds
var thirdHeight = pixelHeight / 3; //This will take the pixel length and cut it into 3rds
var thirds = (thirdHeight + thirdWidth) / 2;   //This actually does the equation to show you how big each square should be.
//the below show's the user what the size of each square should be.
alert("According to the rules of Thrids, the pixel of each square should be " + parseInt(thirdWidth) + " by " + parseInt(thirds) + " pixels.");


