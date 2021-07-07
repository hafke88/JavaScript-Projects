//Global variable
var X=5; 
function Add_numbers_1(){
    document.write(10 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 80+ "<br>");
}

Add_numbers_1();
Add_numbers_2();

//Local variable
function Add_numbers_3(){ 
    var y=6; 
    document.write(10 + y + "<br>");
}
function Add_numbers_4() {
    var z=3
    document.write(z + 80);
    
}

Add_numbers_3();
Add_numbers_4();

//console.log() method
function Add_numbers_5() {
    var J=2;
    console.log(10+J);
}
function Add_numbers_6() {
    console.log(J+50);//debugging with console.log
}
Add_numbers_5();
Add_numbers_6();

//Method Assigment
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

//If Statement
function get_Hours(){
    if (new Date().getTime() > 19) {
        document.getElementById("Demand").innerHTML="You're grounded!";
    }
}

//Else Statement
function Greet_Function() {
    Time = document.getElementById("Time").value;
    if (Time <= 17) {
        Greet= "Good day!";
    }
    else {
        Greet= "Good evening!";
    }
    document.getElementById("During_the_day_or_evening?").innerHTML= Greet;
}

//Else If Statement
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time< 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}