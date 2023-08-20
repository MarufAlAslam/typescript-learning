export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name}, age:${this.age} from ${this.country} is playing`);
    }
}
