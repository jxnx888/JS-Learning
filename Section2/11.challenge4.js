// Codding Challenge 4
/*
 Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

 This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.

To tip the waiter a fair amount, John created a simple tip calculator (as a fucntion). He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, abd 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create:
    a. new array containing all tips (one for each bill).
    b. an array containing final paid amounts (bill+ tip)
HINT: Start with two empty arrays [] as properties and then fill them up in the loop

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110 and $45.
To tip the waiter a fair amount, Mark likes to tip 20% of the bill when the bill is less than $100, 
10% when the bill is between $100 and $300, abd 25% if the bill is more than $300.

5. Implement the same functionality as before, this time using Mark's tipping rules.
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
8. Log to the console which family paid the highest tips on average.

 (NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)


*/
// 1-4
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    // tips:[],
    tipCalculator: function () {
        this.tips = [];
        this.finalBill = [];

        for (var i = 0; i < this.bills.length; i++) {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i]

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill > 50 && bill < 200) {
                percentage = 0.15
            } else {
                percentage = 0.1
            }

            //Add results to the corresponing arrays.
            this.tips[i] = percentage * bill
            this.finalBill[i] = bill + bill * percentage
        }

    }
}
john.tipCalculator();
console.log(john);


// 5-8
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    // tips:[],
    // finalBill:[],
    tipCalculator: function () {
        this.tips = [];
        this.finalBill = [];

        for (var i = 0; i < this.bills.length; i++) {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i]

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill > 100 && bill < 300) {
                percentage = 0.1
            } else {
                percentage = 0.25
            }

            //Add results to the corresponing arrays.
            this.tips[i] = percentage * bill
            this.finalBill[i] = bill + bill * percentage
        }

    }
}

function calcAverage(tips) {
    var sum = 0;
    for (i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
john.tipCalculator();
mark.tipCalculator();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);


if (john.average > mark.average) {
    console.log(john.fullName + "'s family pays higher tips, with an average of $" + john.average)
} else if (mark.average > john.average) {
    console.log(mark.fullName + "'s family pays higher tips, with an average of $" + mark.average)

} else {
    console.log('They pay same tips with an average of $' + john.average)
}
 