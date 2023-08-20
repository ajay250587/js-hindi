// two type of DataTypes

// 1. primitive data type
// Number, String, Boolean,null, undefined Symbol, BigInt
//example of number
const numberData = 123;
const numberScore = 123.34
console.log(numberData , numberScore);
console.log(typeof numberData, typeof numberScore); //number

//example of string
const stringData = "Ajay Gupta";
console.log(stringData);
console.log(typeof stringData); //string

//example of boolean
const isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn); //boolean

const isLoggedOut = false;
console.log(isLoggedOut);
console.log(typeof isLoggedOut); //boolean

//example of null
const isSignIn = null;
console.log(isSignIn); //null (null means empty)
console.log(typeof isSignIn); //object

//example of undefined
//const userId;
//console.log(userId); //syntax error : Missing initializer in const declaration
//console.log(typeof userId);//syntax error : Missing initializer in const declaration

let userEmail;
console.log(userEmail); //undefined
console.log(typeof userEmail); //undefined

//you can assign a value to variable undefined
//Ex:
let userId = undefined;
console.log(userId); //undefined
console.log(typeof userId); //undefined

//example of symbol
const id = Symbol('123');
console.log(id); //Symbol(123)
console.log(typeof id); //symbol

const anotherId = Symbol ('123');
console.log (id == anotherId); //false (It a used in react mainly javascript library)
console.log(id ===anotherId); //false

//example of BigInt
const bigNumber = 637567672578236576n;
console.log(bigNumber); //BigInt use for store a large number
console.log(typeof bigNumber); //bigint


//2. Non-primitive or Reference Type
// array, object, functions

//examples of array
const heros = ["Shaktiman", "Dhruv", "Aryaman"];
console.log(heros);
console.log(typeof heros); //object

//example of object

let myObj = {
    name: "Ajay",
    age: 23,
    phoneNumber: 8699763006
}
console.log(myObj);
console.log(typeof myObj); //object

//example of function

let newFunction = function(){
    console.log("Hello Ajay");
}
newFunction();
console.log(typeof newFunction); //function (but called it object function)

// https://262.ecma-international.org/5.1/#sec-11.4.3 (check typeof )