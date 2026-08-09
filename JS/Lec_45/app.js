// Hoisting is a JavaScript mechanism where variable, function, class, or 
// import declarations are conceptually moved to the top of their containing 
// scope during the compilation phase, before the code is executed

/////////////////////////////////////////////////////////////////////////////////
// 
// Variable Hoisting
//
/////////////////////////////////////////////////////////////////////////////////


// console.log(age);   // undefined but we can access the variable

// var age = 25;

// console.log(num);   // Error

// let num = 30;

// console.log(number);   // Error

// const number = 5;

/////////////////////////////////////////////////////////////////////////////////
// 
// Function Hoisting
//
/////////////////////////////////////////////////////////////////////////////////

// sayMyName("Umesh");

// function sayMyName(Name)
// {
//     console.log("My name is "+ Name);
// }

// sayHello(); // Error

// let sayHello = function{
//     console.log("Hello, How are you?");
// }

/////////////////////////////////////////////////////////////////////////////////
// 
// Class Hoisting
//
/////////////////////////////////////////////////////////////////////////////////

// const obj1 = new Student();     // Error

// class Student
// {
    
// }

/////////////////////////////////////////////////////////////////////////////////
// 
// Function call Stack
//
/////////////////////////////////////////////////////////////////////////////////

// A();

// function D()
// {
//     console.log("Inside Function D");
//     console.log("Goodbye D");
// }

// function B()
// {
//     console.log("Inside Function B");
//     C();
//     console.log("Goodbye B");
// }

// function A()
// {
//     console.log("Inside Function A");
//     B();
//     console.log("Goodbye A");
// }

// function C()
// {
//     console.log("Inside Function C");
//     D();
//     console.log("Goodbye C");
// }

/////////////////////////////////////////////////////////////////////////////////
// 
// Why function is called first class citizens?
//
/////////////////////////////////////////////////////////////////////////////////

// They can be assigned as variables.
// They can be passed as arguments.
// They can be returned from other functions.

// let greet = function()
// {
//     console.log("Hello");
// }

// greet();

// function greetMe(Name)
// {
//     greet();
//     console.log(Name);
// }

// greetMe("Umesh");

// function solve(number)
// {
//     return function()
//     {
//         return number * number;
//     }
// }

// let ans = solve(5);

// console.log(ans());

// const arr = [
//     function(a, b)
//     {
//         return a + b;
//     },
//     function(a, b)
//     {
//         return a - b;
//     },
//     function(a, b)
//     {
//         return a * b;
//     }
// ]

// let first = arr[0];

// console.log(first(5, 10));

// let second = arr[1];
// console.log(second(5, 10));

// let third = arr[2];
// console.log(third(5, 10));

// let obj = {
//     age : 25,
//     wt : 36,
//     ht : 180,
//     greet : () => {
//         console.log("Hello!");
//     }
// }

// console.log(obj.age);

// obj.greet();

console.log(greet);

var greet = function()
{
    console.log("Hello");
}
