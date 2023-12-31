let playerName = "Shakib";
console.log(playerName);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
// array
let fruits = ["apple", "banana", "mango"];
fruits.push("pineapple");
console.log(fruits);
// object
let person = {
    name: "Shakib",
    age: 35,
    isCaptain: true,
};
person.name = "Mashrafi";
// person.country = "Bangladesh"
console.log(person);
// types
let a; //explicitly type declaration
let b = 10; //implicitly type declaration
// array
let arr = []; // union type declaration
// both number and string type value can be stored in this array
arr.push("Hello");
arr.push(10);
// object
let obj;
obj = {
    name: "Shakib",
    age: 35,
    adult: true,
};
// dynamic type
let myVar = 10;
myVar = "Hello";
let anyArr = [];
anyArr.push(10);
anyArr.push("Hello");
let anyObj;
anyObj = {
    name: "Shakib",
    age: 35,
    adult: "true",
};
// function type
// let myFunc: Function;
const myFunc = (a, b, c = "!") => {
    // ? means optional parameter
    return `${a} ${b} ${c}`;
};
// myFunc = 5;
// can't assign number type value to a function type variable
console.log(myFunc("Hello", "World"));
const userDetails = (id, name) => {
    console.log(`User id is ${id}, name is ${name}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.name}, your id is ${user.id}`);
};
userDetails("a", "Shakib");
sayHello({ name: "Shakib", id: 1 });
// function signature
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(5, 10));
let calc;
calc = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calc(5, 10, 'add'));
console.log(calc(5, 10, 'sub'));
// class object
import { Player } from "./classes.js";
// creating object
const shakib = new Player("Shakib", 35, "Bangladesh");
const mashrafi = new Player("Mashrafi", 38, "Bangladesh");
const players = [];
players.push(shakib);
players.push(mashrafi);
console.log(players);
