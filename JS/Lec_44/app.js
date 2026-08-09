// Reference Types
// Object
// Array
// Function

// Objects

// let obj = 
// {
//     name: "Umesh",
//     age: 22,
//     weight: 64,
//     height: 5.9,
//     greet: function()
//     {
//         console.log("Hello, I am " + this.name);
//     }
// }

// console.log(obj);

// obj.greet();

// console.log(typeof(obj));

// Arrays: Collections of items/elements

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let arr2 = [1, "Umesh", true, null, undefined, {name: "Umesh", age: 22}, [1, 2, 3]];
// console.log(arr2);

// array Constructor

// let brr = new Array(1, 2, 3, 4, 5);
// console.log(brr);

// console.log(typeof(brr));

// let arr = ["umesh", "Bhabad", 45, true];

// console.log(arr[0]); // umesh
// console.log(arr[1]);

// // Built-in Array Methods

// arr.push("Hello"); // Adds an element at the end of the array
// console.log(arr);

// arr.pop(); // Removes the last element from the array
// console.log(arr);

// arr.shift(); // Removes the first element from the array
// console.log(arr);

// arr.unshift("Hello"); // Adds an element at the beginning of the array
// console.log(arr);

// arr.splice(1, 1); // Removes 1 element at index 1
// console.log(arr);

// arr.splice(1, 0, "Umesh"); // Adds "Umesh" at index 1
// console.log(arr);

// arr.slice(1, 3); // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// console.log(arr.slice(1, 3));

// Filter, Map, Reduce

// let arr = [10,20,30,40,50];

// // Filter: Creates a new array with all elements that pass the test implemented by the provided function

// let filteredArr = arr.filter((value) => {
//     return value > 20;
// });

// console.log(filteredArr);

// let arr1 = [1, 2, 3, "Umesh", "true", false];

// let filteredArr1 = arr1.filter((value) => {
//     return typeof(value) == "number";
// });

// console.log(filteredArr1);

// Map: Creates a new array with the results of calling a provided function on every element in the calling array

// let mappedArr = arr.map((number) => {
//     return number * number;
// });

// console.log(mappedArr);

// arr.map((num, ind) => {
//     console.log(`Index: ${ind}, Value: ${num}`);
// });

// Reduce: Executes a reducer function on each element of the array, resulting in a single output value


// let Sum = arr.reduce((acc, value) => {
//     return acc + value;
// }, 0);

// console.log(Sum);


// sort()

// let arr = [9, 1, 7, 4, 2, 8];

// arr.sort();
// console.log(arr);

// arr.sort().reverse();
// console.log(arr)


// indexof()

// let arr = [9, 1, 7, 4, 2, 8];

// console.log(arr.indexOf(4));


// for-each

// let arr = [9, 1, 7, 4, 2, 8];

// arr.forEach((value, index) => {
//     console.log(`${value} : ${index}`);
// });

// for-in

// let obj = 
// {
//     name: "Umesh",
//     age: 22,
//     weight: 64,
//     height: 5.9,
//     greet: function()
//     {
//         console.log("Hello, I am " + this.name);
//     }
// }

// for(let key in obj)
// {
//     console.log(`${key} : ${obj[key]}`);
// }


// for-of

// let arr = [10, 20, 30, 40, 50];

// for(let val of arr)
// {
//     console.log(val);
// }

// let str = "Umesh";

// for(let ch of str)
// {
//     console.log(ch);
// }

// Normal Function

// let arr = [10, 20, 30, 40, 50];

// function getSum(arr)
// {
//     let sum = 0;

//     for(let val of arr)
//     {
//         sum += val;
//     }
//     return sum;
// }

// let totalSum = getSum(arr);

// console.log(totalSum);