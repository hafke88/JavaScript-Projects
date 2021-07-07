//Concatenate multiple strings
function full_Sentence() { 
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence= part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

//Slice() Method
function slice_Method() {
    var Sentence= "All work and no play makes Johnny a dull boy.";
    var Section= Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}

//More Methods Challenge
function uppercase_Method() { //Uppercase
    var str="Bingo!";
    var res=str.toUpperCase();
    document.getElementById("Uppercase").innerHTML= res;
}

function search_Method() { //Search
    var str="There once was a boy named Jack who hated green beans.";
    document.getElementById("Search").innerHTML=str.search("Jack");
}

//Number to string
function string_Method() { 
    var B =222;
    document.getElementById("Number").innerHTML=B.toString(); //typeof to see string
}

//toPrecision 
function precision_Method() {
    var E= 22222.223344556677889911;
    document.getElementById("Precision").innerHTML=E.toPrecision(8);
}

//New Methods Challenge
function fixed_Method() { //toFixed() Method
    var num= 2.345678;
    var n=num.toFixed (4);
    document.getElementById("Fixed").innerHTML=n;
}

function value_Method() {
    let str="Show me the money!";
    document.getElementById("Value").innerHTML=str.valueOf();
}

