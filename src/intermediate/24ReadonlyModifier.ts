type Point1 = {
  x: number;
  y: number;
};

const point1: Point1 = {
  x: 0,
  y: 0,
};

//variable assignment
//point1 = { x: 1, y: 1}; //will result in an error due to being const

//property assignment
point1.x = 1;
point1.y = 1;

//cna prevent property assignment by adding readonly
type Point3 = {
  readonly x: number;
  readonly y: number;
};

const point3: Point3 = {
  x: 0,
  y: 0,
};

//property assignment
//point3.x = 1; //will result in an error due to being readonly
//point3.y = 1; //will result in an error due to being readonly

console.log(`(${point3.x},${point3.y})`); //still can read


class Animal3 {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

const sheep = new Animal3('sheep');
console.log(sheep.name); //allow
sheep.name = 'wolf'; //allow

class Animal4 {
    readonly name: string; //readonly modifier
    //can combine readonly with public
    constructor(name: string) {
      this.name = name;
    }
  }

const sheep2 = new Animal4('sheep');
console.log(sheep2.name); //allow
//sheep2.name = 'wolf'; //Disallow