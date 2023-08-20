let playerName = "Shakib";
console.log(playerName);

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(2, 3));


// array
let fruits:string[] = ["apple", "banana", "mango"];

fruits.push("pineapple");
console.log(fruits);

// object
let person = {
    name: "Shakib",
    age: 35,
    isCaptain: true
}

person.name = "Mashrafi"
// person.country = "Bangladesh"

console.log(person);



// types

let a: number; //explicitly type declaration
let b = 10; //implicitly type declaration

// array
let arr: (number | string)[] = [] // union type declaration
// both number and string type value can be stored in this array
arr.push("Hello")
arr.push(10)


// object
let obj: {
    name: string,
    age: number,
    adult: boolean
};

obj = {
    name: "Shakib",
    age: 35,
    adult: true
}