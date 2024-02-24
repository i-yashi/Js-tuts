//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

var name = "Yashi"  //string
const score = 100   //Number
const scoreValue = 100.3    //Number

const isLoggedIn = false    //Boolean
const outsideTemp = null    //object
let userEmail; //undefined

const id = Symbol('123')    //symbol
const anotherId = Symbol('123')  //symbol

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n   //undefined


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //  object
let myObj = {
    name: "hitesh",
    age: 22,
}   //object

const myFunction = function(){          //function
    console.log("Hello world");
}

// console.log(typeof anotherId);
// console.log(typeof userEmail);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof name);

// https://262.ecma-international.org/5.1/#sec-11.4.3