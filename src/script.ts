let playerName = "Shakib";
console.log(playerName);

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(2, 3));

// array
let fruits: string[] = ["apple", "banana", "mango"];

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

let a: number; //explicitly type declaration
let b = 10; //implicitly type declaration

// array
let arr: (number | string)[] = []; // union type declaration
// both number and string type value can be stored in this array
arr.push("Hello");
arr.push(10);

// object
let obj: {
  name: string;
  age: number;
  adult: boolean;
};

obj = {
  name: "Shakib",
  age: 35,
  adult: true,
};

// dynamic type
let myVar: any = 10;
myVar = "Hello";

let anyArr: any[] = [];
anyArr.push(10);
anyArr.push("Hello");

let anyObj: {
  name: any;
  age: any;
  adult: any;
};

anyObj = {
  name: "Shakib",
  age: 35,
  adult: "true",
};

// function type
// let myFunc: Function;

const myFunc = (a: string, b: string, c: string = "!") => {
  // ? means optional parameter
  return `${a} ${b} ${c}`;
};

// myFunc = 5;
// can't assign number type value to a function type variable

console.log(myFunc("Hello", "World"));

// type alias
type StringOrNum = string | number;

const userDetails = (id: StringOrNum, name: string) => {
  console.log(`User id is ${id}, name is ${name}`);
};

const sayHello = (user: { name: string; id: StringOrNum }) => {
  console.log(`Hello ${user.name}, your id is ${user.id}`);
};

userDetails("a", "Shakib");
sayHello({ name: "Shakib", id: 1 });


// function signature
let add: (a: number, b: number) => number;

add = (a: number, b: number) => {
    return a + b;
}

console.log(add(5, 10));

let calc: (a: number, b: number, c: string) => number;

calc = (a: number, b: number, c: string) => {
    if(c === 'add') {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(calc(5, 10, 'add'));
console.log(calc(5, 10, 'sub')); 
