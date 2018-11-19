/*  Primitives vs objects */
console.log('Primitives vs objects ');

// Primitives
var a = 23;
var b = a; //b was defined before a change, so b will not chenge.
a = 46;
console.log(a); //result: 46
console.log(b); //result: 23



// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1; //  object 存储的是对象的地址，地址指向对象。 obj2相同地址，都指向对象的存储空间， 所以空间值改变，地址不变，所以obj2始终等于obj1

obj1.age = 30;
console.log(obj1.age); //result: 30
console.log(obj2.age); //result: 30


// Functions
var age = 27;
var obj = {
    name: 'Alan',
    city: 'Norwalk'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); //result: 27
console.log(obj.city); //result: San Francisco

