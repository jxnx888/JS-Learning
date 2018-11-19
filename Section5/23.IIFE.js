/////////////////////////////
// Lecture: IIFE == Immediately Invoked Function Expressions

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//This is IIFE below
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


