let bonus = 20; // Global variable

function sum(first , second){
    let result = first + second + bonus;
    //console.log(bonus);
    if(result > 9){
        const mood1 = "Happy";
        let mood2 = "Happy";
        var mood3 = "Happy";
        mood3 = "Fishy";
        mood3 = "Funky";
        //console.log(mood3);
    }
    //console.log(mood1);  // Will give error
    //console.log(mood1);  // Will give error
    //console.log(mood3);  // Ok


    // Will give undefined
    //console.log(day);
    //var day = "Friday";

     // Will give error
    console.log(day);
    let day = "Friday";

    return result;
}

const output = sum(3,7);
//console.log(output);