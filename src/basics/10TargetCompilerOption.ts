class Animal2 {
  private name: string; //will not allow child classes to use it

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

//You can config in tsconfig.json
//"target":
//it will differently compile .ts to .js