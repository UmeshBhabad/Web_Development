// Variable Scoping

    // a. Global scope
    // b. Function scope
    // c. 


// Global scoping

// var age = 19;

// console.log(age);

// Inside if block
// if(true)
// {
//     console.log(age);
// }

// Inside for loop
// for(let i = 0; i < 5; i++)
// {
//     console.log(age);
// }

// Inside function
// function displayAge()
// {
//     console.log("My age is " + age);
// }

// Function Scope

// function sayHello()
// {
//     var name = "Earth";

//     console.log("Hello " + name);
// }

// sayHello();

// console.log(name);  // Error

// Block scope

// console.log(height);

// {
//     var height = 180;
// }

// console.log(height);

// Temporal DeadZone

console.log(marks);
console.log("Umesh");
console.log("Bhabad");
const marks = 90;
console.log(marks);
