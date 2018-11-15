// CODDING CHALLENGE 1

/*
Let's remember the first coding challenge where Mark and John compared their BMI. Let's now implement the same functionality with objects and methods.
1. for each of them, create an object with properties for their full name mass, and height.
2. then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respectiove BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height *height).

Good Luck
*/

// 1. 

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calculateBMI: function () {
        this.bmi = this.mass / (this.height * this.height) // this.bim is where we store it.
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calculateBMI: function () {
        this.bmi = this.mass / (this.height * this.height) // this.bim is where we store it.
        return this.bmi;
    }
}

john.calculateBMI();
mark.calculateBMI();
console.log(john, mark);


//never repeat yourself!!! but for this section is the best way to understand. we will learn it in the future.

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.calculateBMI() > john.calculateBMI()) { //or we can just call the function to get the BMI
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI of ' + john.bmi)
}

