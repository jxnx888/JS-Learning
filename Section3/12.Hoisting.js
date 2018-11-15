/* Hoisting */

 

 /* 1.1. Function Execution */
function calculateAge(year) {
    console.log(2018 - year);
}

calculateAge(1990); //result:28

 /* 1.2 */
calculateAge1(1991);//result:27

function calculateAge1(year) {
    console.log(2018 - year);
}



 /* 2.1 Function Expression */
var calculateAge2 = function(year) {
    console.log(2018 - year);
}

calculateAge2(1990);//result:28

 /* 2.2 */
// calculateAge3(1991);  //comment for the js keeps working. if we did not comment, there is an error, so we cannot keep going.
//result: Uncaught TypeError: calculateAge3 is not a function

var calculateAge3 = function(year) {
    console.log(2018 - year);
}

//variables
console.log(age); //result: undefined
var age = 23; //Global Scope
console.log(age); //result: 23

function test() {
    //local scope
    console.log(age); //result: undefined 
    var age = 34; // excution variable
    console.log(age); //result: 34 
}
test();
console.log(age); //result: 23





