"use strict";
class NewPlayer {
    constructor(name, age, country, hasWonWorldCup = true) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.hasWonWorldCup = hasWonWorldCup;
    }
}
const shakib1 = new NewPlayer("Shakib", 35, "Bangladesh", false);
console.log(shakib1.hasWonWorldCup);
