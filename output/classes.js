"use strict";
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name}, age:${this.age} from ${this.country} is playing`);
    }
}
// creating object
const shakib = new Player("Shakib", 35, "Bangladesh");
const mashrafi = new Player("Mashrafi", 38, "Bangladesh");
const players = [];
players.push(shakib);
players.push(mashrafi);
console.log(players);
