// CODDING CHALLENGE 2

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a fucntion). He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, abd 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
 a. Containing all three tips (one for each bill).
 b. Containing all three final paid amounts (bill+ tip).

 (NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)

Good Luck
*/

// 1. 
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill > 50 && bill < 200) {
        percentage = 0.15
    } else {
        percentage = 0.1
    }
    return percentage * bill
}

console.log('The tip is $' + tipCalculator(10));

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])]
// You also can do
// var tips = [tipCalculator(124),
//             tipCalculator(48),
//             tipCalculator(268)]     

var finalBill = [bills[0] + tips[0],
                 bills[1] + tips[1],
                 bills[2] + tips[2]];
console.log('Tip is: '+tips, 'Final Bill is: ' + finalBill);
