// // arithemetic operations

// let a = 10;
// let b = 5;

// console.log("Addition: " + (a + b));
// console.log("Subtraction: " + (a - b));
// console.log("Multiplication: " + (a * b));
// console.log("Division: " + (a / b));
// console.log("Modulus: " + (a % b));
// console.log("Exponentiation: " + (a ** b));

// // unary operations

// let c = 10;

// console.log("Unary Plus: "+ ++c);
// console.log("Unary Minus: "+ --c);

// console.log("postfix Increment: "+ c++);
// console.log("postfix Decrement: "+ c--);

// // Assignment operations

// let d = 10;

// console.log("Assignment: d + 5 = "+ (d += 5));
// console.log("Assignment: d - 5 = "+ (d -= 5));
// console.log("Assignment: d * 5 = "+ (d *= 5));
// console.log("Assignment: d / 5 = "+ (d /= 5));
// console.log("Assignment: d % 5 = "+ (d %= 5));
// console.log("Assignment: d ** 5 = "+ (d **= 5));

// // Comparison operations

// let e = 10;
// let f = 5;

// console.log("Equal to: "+ (e == f));
// console.log("Not Equal to: "+ (e != f));
// console.log("Strict Equal to: "+ (e === f));

// console.log("Strict Not Equal to: "+ (e !== f));
// console.log("Greater than: "+ (e > f));
// console.log("Less than: "+ (e < f));
// console.log("Greater than or Equal to: "+ (e >= f));
// console.log("Less than or Equal to: "+ (e <= f));

// // Logical operations

// let g = true;
// let h = false;

// console.log("Logical AND: "+ (g && h));
// console.log("Logical OR: "+ (g || h));
// console.log("Logical NOT: "+ (!g));

// console.log(false || "Umesh" || true || 3);

// // Ternary operations

// let i = 10;
// let j = 5;

// let result = (i > j) ? "i is greater than j" : "i is less than or equal to j";
// console.log(result);

// let age = 5;
// let canVote = (age >= 18) ? "You can vote" : "You cannot vote";
// console.log(canVote);

// Bitwise operations

// let k = 5;
// let l = 3;

// console.log("Bitwise AND: "+ (k & l));
// console.log("Bitwise OR: "+ (k | l));
// console.log("Bitwise XOR: "+ (k ^ l));
// console.log("Bitwise NOT: "+ (~k));
// console.log("Left Shift: "+ (k << 1));
// console.log("Right Shift: "+ (k >> 1));
// console.log("Zero Fill Right Shift: "+ (k >>> 1));


// Conditional statements

// let age = 15;

// if(age >= 18)
// {
//     console.log("You can vote");
// }
// else
// {
//     console.log("You cannot vote");
// }

// let number = 10;

// if(number == 10)
// {
//     console.log("Number is 10");
// }
// else if(number > 10)
// {
//     console.log("Number is greater than 10");
// }
// else
// {
//     console.log("Number is less than 10");
// }

let num = 2;

switch(num)
{
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    case 3:
        console.log("Case 3");
        break;
    default:
        console.log("Default case");
}