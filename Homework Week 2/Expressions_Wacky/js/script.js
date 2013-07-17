/* Douglas DJay Sweeting
 July 17 2013
 Expression Wacky Worksheet  */

/* How fast does something fall
    I will be allowing the user to input velocity of an object
    and the position off ground the object is falling.
 */

var metersPerSecond = prompt("What are the meters per second an object is traveling?");
var time = prompt("From the release, how long did it take the object to hit the ground?");
var distance = .5 * metersPerSecond * (time * time);
alert("The object was " + distance + " meters off the ground");
var answer = metersPerSecond * time;
alert("The object was moving " + answer + " meters per second.");