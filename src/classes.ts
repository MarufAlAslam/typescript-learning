class Player {
    name: string;
    age: number;
    country: string;

    constructor(name: string, age: number, country: string) {
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

const players:Player[] = [];


players.push(shakib);
players.push(mashrafi);

console.log(players);