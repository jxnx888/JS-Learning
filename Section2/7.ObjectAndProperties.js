// Object and Properties

var alan = {
    firstName: 'Alan', //key:value
    lastName: 'Ning',
    birthYear: 1990,
    family:['Faye', 'Aiden', 'Nison'],
    job: 'Front-end Developer',
    isMarried: true
}
console.log(alan);
console.log(alan.firstName); //result: Alan
console.log(alan['lastName']); // result: Ning
var x = 'birthYear';
console.log(alan[x]);

alan.job = 'designer'; //change data
alan['isMarried'] = false;
console.log(alan);

// //new Object syntax
var faye = new Object();
faye.firstName = 'Faye';
faye['lastName'] = 'Fan';
faye.birthYear = 1991;
console.log(faye);
