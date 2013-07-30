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

function yardWork(){
     var trees = prompt("Do you need trees cut down?\n" +
         "1. Yes\n" +
         "2. No");

     if (trees == 1){
         var howMany = prompt("How many trees do you want cut down?");
         var price = 50 * howMany;
     }
    else{
         var price = 0;
     }
    var lawn = prompt("Do you want your lawn cut? \n" +
        "If so how big is your lawn?\n" +
        "Q. No Thanks");
    if (lawn >= 120){
        var lawnPrice = 200;
    }else if ((lawn > 120) && (lawn <= 450)){
        var lawnPrice = 400;
    }else if (lawn >450 ){
        var lawnPrice = 500;
    }  else {
        var lawnPrice = 0;
    }

    var clean = prompt("Would you like us to clean your yard?\n" +
        "1. Yes\n" +
        "2. No");
    if (clean == 1){
        var cleanPrice = 150;
    }
        else{
            var cleanPrice = 0;
        }
    var overallPrice = price + lawnPrice + cleanPrice;
    console.log(overallPrice);
}

yardWork()
