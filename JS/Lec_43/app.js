// function greet(name)
// {
//     console.log("Hello, " + name + "!");
// }

// greet("Umesh");

// Basic Syntax of Function

// function functionName(parameters)
// {
//     // code to be executed
// }

// functionName(arguments);

// function sayMyName(name)
// {
//     console.log("Hello, " + name + "!");
// }

// sayMyName("Umesh");

// function countNumbers()
// {
//     for(let i = 1; i <= 10; i++)
//     {
//         console.log(i);
//     }
// }

// countNumbers();


// function getAverage(num1, num2)
// {
//     sum = num1 + num2;
//     average = sum / 2;
//     console.log("Average of " + num1 + " and " + num2 + " is: " + average);
// }

// getAverage(10, 20);

// return functions

// function getSum(num1, num2)
// {
//     sum = num1 + num2;
//     return sum;
// }

// let ans = getSum(10, 20);

// console.log("Sum of 10 and 20 is: " + ans);

// function getName(firstName, lastName)
// {
//     return firstName + " " + lastName;

//     // Unreachable code
//     console.log("This line will not be executed.");
// }

// let fullName = getName("Umesh", "Bhabad");

// console.log("Full Name is: " + fullName);

// Anonymous Function

// let greet = function(name)
// {
//     console.log("Hello, " + name + "!");
// }

// greet("Umesh");

// square = function(num)
// {
//     return num * num;
// }

// let ans = square(5);

// console.log("Square of 5 is: " + ans);


// Arrow Function

// function getExp(x, y)
// {
//     return x ** y;
// }

getExp = (x, y) => x ** y;

let ans = getExp(2, 3);
console.log("2 raised to the power 3 is: " + ans);
