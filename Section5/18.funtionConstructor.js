/* Function Constructor */
var alan = {
    name: 'Alan',
    yearOfBirth: 1990,
    job: 'Developer'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function (){
        console.log(2018-this.yearOfBirth);
    }
}

var alan = new Person('Alan', 1990, 'Developer');

alan.calculateAge();

//once we have other data, we have to do the same thing in below.
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();



var Person1 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//把function通过prototype添加到object中， 如果是直接添加到object中， 那么所有object都会有这个function，就会占用很多空间。
// 如果采用prototype添加，只有在object 使用这个function的时候才会存在function属性。
Person1.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};
john.calculateAge();
jane.calculateAge();
mark.calculateAge();


//all person has same last name
Person.prototype.lastName = 'Smith';
console.log(alan.lastName);
console.log(jane.lastName);
console.log(john.lastName);

console.log(alan);
