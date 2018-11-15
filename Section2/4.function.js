//Function Statements and Expressions

// Funtion declaration
// function whatDoYouDo (job, firstName) {

//  }


// Function expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches in high school.';
        case 'driver':
            return firstName + ' drives high school bus.';
        case 'designer': 
            return firstName + ' designs amazing websites.';
        default:
            return firstName + ' does something else.';
        }
}
 
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Nison'));
console.log(whatDoYouDo('Accounter', 'Faye'));

//Also the switch statement in above, you can use if else statement to do it. You can try it.