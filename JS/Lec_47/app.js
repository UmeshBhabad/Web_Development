////////////////////////////////////////////////////////////////////
// Classes && Default parameters
////////////////////////////////////////////////////////////////////


// class state/ Property/ Characteristics
// Class Behaviour/ Functionality

// class human
// {
//     age = 30;   // public
//     #wt = 80;    // Private
//     ht = 180;

//     walking()
//     {
//         console.log("I am walking", this.#wt);
//     }

//     running()
//     {
//         console.log("I'm running");
//     }

//     get fetchWeight()
//     {
//         return this.#wt;
//     }

//     set modifyWeight(val)
//     {
//         this.#wt = val;
//     }
// }

// let obj = new human();

// console.log(obj.age);
// obj.walking();

// // console.log(obj.#wt);    // Error

// // Access getter setter
// console.log(obj.fetchWeight);

// obj.modifyWeight = 60;
// console.log("Modified Weight :",obj.fetchWeight);

////////////////////////////////////////////////////////////////////
// CONSTUCTOR
////////////////////////////////////////////////////////////////////


// class human
// {
//     age;   // public
//     #wt;    // Private
//     ht;

//     constructor(age, weight, height)
//     {
//         this.age = age;
//         this.#wt = weight;
//         this.ht = height;
//     }

//     walking()
//     {
//         console.log("I am walking", this.#wt);
//     }

//     running()
//     {
//         console.log("I'm running");
//     }

//     get fetchWeight()
//     {
//         return this.#wt;
//     }

//     set modifyWeight(val)
//     {
//         this.#wt = val;
//     }
// }

// let obj = new human(22, 64, 180);

// console.log(obj.age);
// obj.walking();

// // console.log(obj.#wt);    // Error

// // Access getter setter
// console.log(obj.fetchWeight);

// obj.modifyWeight = 60;
// console.log("Modified Weight :",obj.fetchWeight);

// obj.age = 25;
// console.log(obj.age);


////////////////////////////////////////////////////////////////////
// Default Parameters
////////////////////////////////////////////////////////////////////

// function sayName(myName = "John Doe")
// {
//     console.log("My name is", myName);
// }

// sayName("Umesh");
// sayName();


// function sayName(firstName = "John", lastName = "Doe")
// {
//     console.log("My name is", firstName, lastName);
// }

// sayName("Umesh", "Bhabad");
// sayName();

// sayName("Umesh");
// sayName(lastName = "Umesh");

// function sayName(value = {name : "Umesh", age : 22, wt : 64})
// {
//     console.log("My name is", value);
// }

// sayName("Umesh", "Bhabad");
// sayName();


// function sayName(value = "Umesh")
// {
//     console.log("My name is", value);
// }

// sayName(null);
// sayName(undefined);


function getAge(){return 30;}

function utility(name = "John", age = getAge())
{
    console.log(name, age);
}

utility("Umesh", 22);
utility("Umesh");
utility();
