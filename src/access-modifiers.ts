class NewPlayer {
  constructor(
    public name: string,
    private age: number,
    protected country: string,
    readonly hasWonWorldCup: boolean = true
  ) {}
}

const shakib1 = new NewPlayer("Shakib", 35, "Bangladesh", false);

console.log(shakib1.hasWonWorldCup);
