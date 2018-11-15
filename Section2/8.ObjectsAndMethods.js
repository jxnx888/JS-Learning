// Object and Methods

//very basic method in object. only object has methods
var alan = {
    firstName: 'Alan', //key:value
    lastName: 'Ning',
    birthYear: 1990,
    family:['Faye', 'Aiden', 'Nison'],
    job: 'Front-end Developer',
    isMarried: true,
    calculateAge:function(birthYear){
        return 2018 - birthYear;
    }
}
console.log(alan.calculateAge(1980));  //result 28
// we have to pass the value into the function. but the 1990 is alreday defind. so how do we use it


var alan = {
    firstName: 'Alan', //key:value
    lastName: 'Ning',
    birthYear: 1990,
    family:['Faye', 'Aiden', 'Nison'],
    job: 'Front-end Developer',
    isMarried: true,
    calculateAge:function(){
        return 2018 - this.birthYear;
    } 
}
console.log(alan.calculateAge()); 
alan.age = alan.calculateAge();
console.log(alan); 
alan.age = alan.calculateAge(); // insert a value age into array
//or we can do alan.age = alan.calculateAge();
console.log(alan) 


var alan = {
    firstName: 'Alan', //key:value
    lastName: 'Ning',
    birthYear: 1990,
    family:['Faye', 'Aiden', 'Nison'],
    job: 'Front-end Developer',
    isMarried: true,
    calculateAge:function(){
        this.age = 2018 - this.birthYear;
    }
}
alan.calculateAge(); //without this call, the result do not include the value age. 
console.log(alan)
