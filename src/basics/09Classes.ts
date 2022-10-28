class Animal {
  //private name: string; //will not allow child classes to use it
  protected name: string; //will allow child classes to use it

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

let cat = new Animal("Cat");
cat.move(10);

//cat.name = 'Dog'; //error because name is private or protected

//Inheritance
class Bird extends Animal {
  public fly(distanceInMeters: number): void {
    console.log(`${this.name} flew ${distanceInMeters}m.`);
  }
}
