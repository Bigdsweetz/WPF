/* Douglas DJay Sweeting
 July 17 2013
 Expression Wacky Worksheet  */

/* How fast does something fall
    I will be allowing the user to input velocity of an object
    and the position off ground the object is falling.
 */

var metersPerSecond = prompt("What are the meters per second an object is traveling?");  //ask the user to create their own gravity
var time = prompt("From the release, how long did it take the object to hit the ground?"); //ask the user how long it took for the object to hit the ground
var distance = .5 * metersPerSecond * (time * time);  //equation for distance
alert("The object was " + distance + " meters off the ground"); //This tells the user how far off the ground the object was
var answer = metersPerSecond * time;  //equation for time
alert("The object was moving " + answer + " meters per second.");//This tells the user how fast the object was moving at impact


