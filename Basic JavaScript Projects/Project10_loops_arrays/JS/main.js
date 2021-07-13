//While Loop
function Loop() {
    var Digit = "";
    var X= 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//String length Property
function String_Length() {
    let str= "Let's see how long this sting is!"
    document.getElementById("String Length").innerHTML = str.length;;
}

//For Loop
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments [Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML=Content;
}

//Array
function array_Function() {
    var Bike_Picture = [];
    Bike_Picture[0]= "mountain bike";
    Bike_Picture[1]= "racing bike";
    Bike_Picture[2]= "dirt bike";
    Bike_Picture[3]= "cruiser bike";
    Bike_Picture[4]= "unicycle bike";
    document.getElementById("Array").innerHTML="This is a picture of a "+ Bike_Picture[2] + ".";
}

//CONST Keyword
function constant_function() {
    const Truck= {type: "pick-up", brand:"Ram", color:"black"};
    Truck.color= "silver";
    Truck.rims= "24 inch chrome";
    Truck.price= "$54,000";
    document.getElementById("Constant").innerHTML= "The cost of the " + Truck.brand + " " + Truck.type + " is " + Truck.price + "." + " The color is " + Truck.color + ".";
}

//Let Keyword
function let_Keyword() {
    var X= 88;
    document.write(X);
    {
        let X= 22;
        document.write("<br>" + X) ;
    }
    document.write("<br>" + X) ;
    document.getElementById("Let").innerHTML= "";
}

//Return statement
function return_Statement() {
    return Math.PI;
}
document.getElementById("return").innerHTML= return_Statement();

//Object Assignment
function object_Function() {
    let bike= {
        make: "Schwinn ",
        model: "Amalgam ",
        year: "2021 ",
        color: "black ",
        price: "$1,700 ",
        description : function() {
            return "The bike is a "+ this.year + this.color + this.make + this.model + " for " + this.price;
        }
    };
    document.getElementById("car").innerHTML= bike.description();
}

//Break assignment in loop
let text="";
for (let i =0; i<10; i++){
    if (i===3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML=text;

//Continue assignment in loop
let words = "";
for (let j =0; j<10; j++){
    if (j===3) { continue; }
    words += "The number is " + j + "<br>";
}
document.getElementById("continue").innerHTML=words;

