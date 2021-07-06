function Ride_Function() { //ternary operators assignment
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride=(Height<52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+ " to ride.";
}

function Vote_Function() { //ternary operator challenge, voters
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote=(Age<18)? "You are not old enough ":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote+ " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //Keyword coding assignment
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a "+Erik.Vehicle_Color+ "-colored "+ Erik.Vehicle_Model+" manufactured in "+ Erik.Vehicle_Year;
}

function Bigcat(Type, Size, Location, Color) { //New and this keyword assignment, Object Constructor(Big Cat)
    this.Bigcat_Type= Type;
    this.Bigcat_Size= Size;
    this.Bigcat_Location= Location;
    this.Bigcat_Color= Color;
}
var Asia= new Bigcat("Tigers", "650 lbs", "Siberia", "Orange and Black");
var Africa= new Bigcat("Lions", "450 lbs", "Kenya", "Goldish Brown");
var South_America= new Bigcat("Jaguars", "210 lbs", "Amazon Rain Forest", "Tan with spots");
function myCats () {
    document.getElementById("New_and_This").innerHTML="Asia has "+Asia.Bigcat_Type+ " that weigh "+Asia.Bigcat_Size+", lives in "+Asia.Bigcat_Location+", and whose colors are "+Asia.Bigcat_Color;
}

function up_Function() { //Nested Function
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var Starting_point= 2;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
    }
}