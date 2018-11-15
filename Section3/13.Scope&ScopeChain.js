/* Scoping and the Scope Chain */
/* 
Scoping answers the question "where acan we access a certain variable?"
Each new function creates a scope: the space/environmenet, in which the variables it defines are accessible.
lexical scoping: a function that is lexically within another function gets access to the scope of the outer function 
\
*/


var a = 'Hello!'; //Global Scope
first();
function first() {
    var b = 'World';
    second();
    function second() {
        var c = 'Hello!'
        console.log(a + b + c);
    }
}

/*
Above: line 10 to 19 is Global scope;
line 13 to 18 is first() scope
line 16 to 17 is second() scope
So,  Global scope --> first scope --> second scope is the Scope Chain
*/

var a1 = 'Hello!'; //Global Scope
first1();
function first1() {
    var b1 = 'World';
    second1();
    function second1() {
        var c1 = 'Hello!'
        third();
    }
}
function third(){
    var d= "Alan";
    // console.log(c); //result: Uncaught ReferenceError: c is not defined
    console.log(a+d);
}