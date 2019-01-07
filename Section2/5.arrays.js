// Arrays

var array = new Array;
array = [];

var array = [0, 1, a, b, false]

var names = ['John', 'Mark', 'Alan', 'Faye']; //Here, the order in array,we use 0 base, so the first is 0. second is 1.
var years =new Array (1969, 1948, 1989, 1990);

console.log(names); //result (4) ["John", "Mark", "Alan", "Faye"]
console.log(names.length);//result 4
console.log(names[2]); //result Alan


//add data into array
names[1] = 'Chris';
names[5] = 'Lucus';
console.log(names);//result (6) ["John", "Chris", "Alan", "Faye", empty, "Lucus"]
names[names.length] = 'Alina'; // It will always add data in the end of the array.


//you can insert different type of data into array
var John = ['John', 'Li', 1991, 'designer', false]

John.push('blue');
console.log(John);// reuslt: (6) ["John", "Li", 1991, "designer", false, "blue"] push data value into the end of array
John.unshift('Mr.');
console.log(John);// result: (7) ["Mr.", "John", "Li", 1991, "designer", false, "blue"]  unshift is input the value at the begin of array
John.shift();
console.log(John);// result: (6) ["John", "Li", 1991, "designer", false, "blue"] shift is delete the first value of array
John.pop();
console.log(John);// result: (5) ["John", "Li", 1991, "designer", false] pop is delete the last value of array
console.log(John.indexOf(23)); // result: -1. once there is no 23, it will return -1 which means there is no value '23'

var isDesigner = John.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'; 
console.log(isDesigner); //reuslt: John IS a designer
console.log(John.indexOf('designer')); // result: 3.
