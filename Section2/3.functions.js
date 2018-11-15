// what's function
// very simple simple example 
// we can pass in argument into a function, we can return result from function with return key words
// also function can call other functions.
var now = 2018;

function calculateAge(birthYear) { //function calculateAge(birthYear, x, y)
    return now-birthYear;
}

var ageJohn = calculateAge(1989);
var ageMike = calculateAge(1948);
var ageMary = calculateAge(1996);

console.log("John is " + ageJohn + " years old");
console.log("Mike is " + ageMike + " years old");
console.log("Mary is " + ageMary + " years old");

// How many years X will retire. Here we will create a function and call it to get the results. function can call other functions.
// 

function yearsUntilRetirement (year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0 ){
    console.log(firstName + " retires in " + retirement + " years.")
} else {
    console.log( firstName + " is alreay retired.")
}
}

yearsUntilRetirement(1989, 'Alan'); //We will pass two values (number, string) to the function
yearsUntilRetirement(1949, 'Faye');
