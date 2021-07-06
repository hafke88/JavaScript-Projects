document.write(typeof "Color" + "<br>"); //output string

document.write(typeof 2 + "<br>"); //output number

document.write("20"+8 + "<br>"); //coercion

document.write(2E310 + "<br>"); //infinity

document.write(-2E310 + "<br>"); //-infinity

document.write(15>2); //boolean, true statement

document.write(12<2); //boolean, false statement

console.log(2 + 2); //console

console.log(10<4); //console showing false

document.write(10==10); //double equal signs, true

document.write(3==19); //double equal signs, false

x=10;
y=10;
document.write(x===y); //triple = sign, true, same date type and value

x=5;
pie=6;
document.write(x===pie); //triple = sign, false, different date type and different value

x=3;
y="3";
document.write(x===y); //triple = sign, false, different data type but same value

x=5;
y=11;
document.write(x===y); //triple= sign, fals, same data type but different value

document.write(5>3 && 10>4); //AND operator, true

document.write(5>12 && 10>3); //AND operator, false

document.write(2>3 || 4>1); //OR operator, true

document.write(4>5 || 6>9); //OR operator, false

function not_Function(){
    document.getElementById("False").innerHTML=!(20>10);
}

function not_Function1(){
    document.getElementById("True").innerHTML=!(10>20);
}