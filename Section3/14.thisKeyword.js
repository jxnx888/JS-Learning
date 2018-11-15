/* The this Keyword */
/* 
 Regular function call: the this keword points at the global object, (the window object, in the browser)
 Method call: the this variable points to the object that is calling the method.
 The this keyword is not assigned a value until a function where it is defined is actually called.
*/
 
console.log(this); //result: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
// this mean the global object, target to window object.
calculateAge(1990);

function calculateAge(year) {
    console.log(2018-year); //result: 28
    console.log(this); //result: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
}

var alan = {
    firstName: 'Alan', //key:value
    birthYear: 1990,
    calculateAge1:function(){
        console.log(this); //result: {firstName: "Alan", birthYear: 1990, calculateAge1: ƒ}
        console.log(2018-this.birthYear); //result:28
        // function innerFunction() { //
        //     console.log(this); //result: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
        // }
        // innerFunction();
    } 
}
alan.calculateAge1();



var faye = {
    firstName: 'Faye', //key:value
    birthYear: 1991
};

faye.calculateAge1 = alan.calculateAge1; //faye has same function from alan.
faye.calculateAge1();
