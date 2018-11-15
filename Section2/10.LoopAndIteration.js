// Loops And Iteration


// console the number from 0 - 9

// console.log(0);
// console.log(1);
// console.log(2);
// // ...
// console.log(9);

//But this is not a good way to do it. so now we learn the loop.

// for loop
for (var i = 0; i < 10; i++) {  //i start from 0, i will not bigger then 9. i++ = i =  i +1
    console.log(i)
}

// once the i = 0.;  i< 10 is true, so log i to console, i = i+1;
// once the i = 1.;  i< 10 is true, so log i to console, i++;
// ..
// once the i = 9;  i< 10 is true, so log i to console, i++;
// once the i = 10;  i< 10 is false, so this loop will end, exit the loop.

// console the odd number from 0 - 20

for (var i = 1; i < 20; i += 2) {
    console.log(i)
}
// console the even number from 0 - 20

for (var i = 0; i < 20; i += 2) {
    console.log(i)
}

//using for loop a array
var alan = ['Alan', 'Ning', 1990, 'Front-end Developer', false, 'happiness']
for (var i = 0; i < alan.length; i++) {
    console.log(alan[i]);
}


//while loop

var i = 0;
while (i < alan.length) {
    console.log(alan[i]);
    i++;
}

//continue and break statements.

//if we just want to console the string
for (var i = 0; i < alan.length; i++) {
    if (typeof alan[i] !== 'string') {
        continue
    };
    // if(typeof alan[i] !== 'string')  continue;
    console.log(alan[i]);
}

//loop stop when the value is not string
for (var i = 0; i < alan.length; i++) {
    if (typeof alan[i] !== 'string') break;
    console.log(alan[i]);
}

// Looping backwards
for (var i = alan.length - 1; i >= 0; i--) {
    console.log(alan[i]);
}
