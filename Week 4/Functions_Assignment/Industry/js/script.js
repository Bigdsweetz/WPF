/* Douglas DJay Sweeting
 July 29 2013
 Expression Worksheet
 Industry Function*/


/*A user wants to have people
    input what kind of work
    they want done and also
    wants to be able to give them
    an estimate. */

//Lawn Work

function yardWork(){  //The beginning of the function
     var trees = prompt("Do you need trees cut down?\n" + // This ask the user if they want trees cut down
         "1. Yes\n" +
         "2. No");

     if (trees == 1){
         var howMany = prompt("How many trees do you want cut down?"); //If the user selects to have trees cut down
         var price = 50 * howMany; //price times user input            //They can put how many they would like to have
     }                                                                 //cut down
    else{
         var price = 0;
     }
    var lawn = prompt("Do you want your lawn cut? \n" +                  //This ask the user to input how big their
        "If so how big is your lawn?\n" +                                //lawn is. I put Q for quit, but it really
        "Q. No Thanks");                                                 //doesn't matter as long as the user does not
    if (lawn >= 120){                                                    //input a number
        var lawnPrice = 200;            //small lawn
    }else if ((lawn > 120) && (lawn <= 450)){    //medium lawn
        var lawnPrice = 400;
    }else if (lawn >450 ){   //a big lawn
        var lawnPrice = 500;
    }  else {
        var lawnPrice = 0;
    }

    var clean = prompt("Would you like us to clean your yard?\n" +      //This ask the user if they would like to have
        "1. Yes\n" +                                                    //their yard cleaned
        "2. No");
    if (clean == 1){
        var cleanPrice = 150; //price for a clean yard
    }
        else{
            var cleanPrice = 0; //price for a messy yard
        }
    var overallPrice = price + lawnPrice + cleanPrice;  //adds everything together
    console.log(overallPrice); //Writes to the console
}

yardWork();//Calls the function
