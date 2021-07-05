function addition_Function() {
    var addition= 2+2;
    document.getElementById("Math").innerHTML="2+2="+addition;
}

function subtraction_Function() {
    var subtraction= 2-2;
    document.getElementById("Subtract").innerHTML="2-2="+subtraction;
}

function Division() {
    var simple_Math= 4/2;
    document.getElementById("Divide").innerHTML="4/2="+simple_Math;
}

function Multiplication() {
    var simple_Math= 2*4;
    document.getElementById("Multiply").innerHTML="2*4="+simple_Math;
}

function more_Math(){
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("Multiple_Operations").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " +simple_Math;
}

function modulous_Operator() {
    var simple_Math=25%6;
    document.getElementById("Modulous").innerHTML="When you divide 25 by 6 you have a remainder of: "+simple_Math;
}

function negation_Operator() {
    var x=10;
    document.getElementById("Negation").innerHTML= -x;
}

var X=5 //Increment
X++;
document.write(X);

var Y=11//Decrement
Y--;
document.write(Y);

window.alert(Math.random()*100); //Random

function math_Object(){ //Example of Math Object Method. Return number to nearest integer
    var y=Math.round(6.7);
    document.getElementById("Object").innerHTML = y; 
}

