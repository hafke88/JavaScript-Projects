function my_function(){
    document.getElementById("test").innerHTML=0/0;
}

function string(){
    document.getElementById("right").innerHTML=isNaN('This is a string');
}

function number(){
    document.getElementById("wrong").innerHTML=isNaN('007');
}