/* Douglas DJay Sweeting
 July 14 2013
 Expression Worksheet  */

//Dog Years

var years = prompt ("Please enter the age of Sparky."); //asking the user for Sparky's age and declaring the variable years
var dogYears = years * 7; //multiplying what the user puts in times 7 to get the dog's age in dog years
console.log("Sparky is " + dogYears + " dog years old."); //This prints out the age of the dog to the console


//Slice of Pie part I

var pizza = prompt("How many pizza's were ordered?"); //asking the user for the amount of pizza ordered
var slices = pizza * 8; //We are going to define slices as 8 per pie
var people = prompt("How many people were at the party?");//asking the user for the amount of people there
var eaten = slices / people; //this lets everyone know how many slices everyone can have.
console.log("Each person ate " + eaten + " slices of pizza at the party"); //the answer

//Slice of Pie part II
eaten = slices % people; //This shows how much is left over from what everyone has eaten.
console.log("Sparky got " + eaten + " slices of pizza"); //This shows how many slices Sparky gets to eat.


//Average Shopping Bill
var week = [0 , 1, 2, 3, 4]; //Initializing an array.
week [0] = prompt ("What are your week 1 grocery totals?"); //Input for week 1
week [1] = prompt ("What are your week 2 grocery totals?"); //Input for week 2
week [2] = prompt ("What are your week 3 grocery totals?"); //Input for week 3
week [3] = prompt ("What are your week 4 grocery totals?"); //Input for week 4
week [4] = prompt ("What are your week 5 grocery totals?"); //Input for week 5

//I have used a parseFloat in order to be able to get a decimal back from this.
var total  = parseFloat(week[0]) + parseFloat(week[1]) + parseFloat(week[2]) + parseFloat(week[3]) + parseFloat(week[4]);
 //Here I average the total of the 4 weeks together
var average = total / 5;
//This outputs the answer to the above.
console.log ("“You have spent a total of " + total + " on groceries over 5 weeks. That is an average of " + average + " $ per week ");

//Discounts
var originalPrice = prompt ("What is the original price?"); //Input for the original price of the object
var discount = prompt ("How much of a discount are they getting?"); //How much of a discount the customer is getting
var description = prompt ("What is the item?"); //What the item really is
var salesTax = prompt ("How much is sales tax?"); //How much in taxes
var hookUp = parseFloat(discount) / 100;//amount of the discount
var taxes =  parseFloat(salesTax) / 100;//amount of the taxes
console.log(originalPrice);
console.log(discount);
console.log(description);
console.log(salesTax);
console.log(hookUp);
console.log(taxes);

var totalWithoutTax = parseFloat(originalPrice) - parseFloat(hookUp);//total without tax
var totalWithTax = (originalPrice - hookUp) + taxes;//total with tax
console.log("Your " + description + " was originally $" + originalPrice + ", but after a " + discount + "% discount,\n" +
    " it is now $" + totalWithoutTax + " without tax, and $" + totalWithTax +" with tax.”");// The correct answer

