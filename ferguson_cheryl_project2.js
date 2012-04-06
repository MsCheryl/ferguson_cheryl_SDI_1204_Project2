//Cheryl Ferguson
//SDI Term 1204
// Project 2



//Global Variables
var mySchools = ["Radford University", " University of Delaware ", "Temple University"],
var hoursAway = [1.5,2,5];


//Procedure
var firstDay = function(days){
    console.log("It\'s almost time for the first day of the semester!");
        console.log("Time to get mentally prepared.");
        if(days < 14 && days >=7){
            console.log("I have two weeks of fun time before the first day of the semester.");
        }else{
            console.log("Time to begin the semester.");
        }
    };

//firstDay(6);

//Boolean
var schoolStatus = function(appliedSchools, idealSchools){
    var myFuture;
    if(appliedSchools == 7 && idealSchools === true){
            console.log("I was accepted to" + " "+ idealSchools + "my ideal schools.");
        }else{
            console.log("I was not accepted to my ideal school.");
        }
    myFuture = ("I have applied to" +" " + appliedSchools+ ".");
    return myFuture;
};
//var mySchoolStatus = schoolStatus(3, false);
//console.log(mySchoolStatus);


//Number
var schools = function(accepted){
var desiredNumber;
var numberApplied = 3;
        while(numberApplied <= accepted){
            console.log(numberApplied);
            numberApplied++;
        }
    desiredNumber= "I need"+" " + accepted +" "+"acceptance letters.";
    console.log("I need to apply to atleast 7 schools.");
    return desiredNumber;
      
};
//var lettersNeeded = schools(7);
//console.log(lettersNeeded);


//String
var roomStatus = function(roommates, bed){
var myRoom;
    console.log("I didn\'t get a single room this semester,but I have" +" " + roommates +" " +"roommate.");
    myRoom = "I am in an apartment, but it has a" +" " +bed + " " + "mattress.";
    return myRoom;

};
//var campusLiving = roomStatus(1, "xl twin");
//console.log(campusLiving);


//Array
var totalHoursAway = function( ){
var theSchool;
    var idealTime = 1.5
    console.log("I would like to find a school"+" "+ idealTime +" " + "hours away.");
    for (var i = 0; i< mySchools.length; i++){
        console.log("Here are the schools in order:" + " " + mySchools +".")
    }
    theSchool = "I think"+" " + mySchools[1]+" " +"will be my choice."
    return theSchool;
}
       
var mySchoolChoices = totalHoursAway( );
console.log(mySchoolChoices);
 
 
//calling the functions

//Procedure
firstDay(6);

//Boolean
var mySchoolStatus = schoolStatus(3, false);
console.log(mySchoolStatus);

//Number
var lettersNeeded = schools(7);
console.log(lettersNeeded);

//String
var campusLiving = roomStatus(1, "xl twin");
console.log(campusLiving);

//Array
var mySchoolChoices = totalHoursAway( );
console.log(mySchoolChoices);