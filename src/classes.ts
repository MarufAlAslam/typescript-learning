export class Player {
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

