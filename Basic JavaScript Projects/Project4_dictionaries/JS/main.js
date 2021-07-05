function my_Dictionary() {
    var Animal= {
        Species:"Turtle",
        Color:"Black and Yellow",
        Type:"Spottle Turtle",
        Sound:"None"
    };
    delete Animal.Type;//deleting animal type
    document.getElementById("Dictionary").innerHTML=Animal.Type;//will show up as undefined
}