/**
 * In tsconfig.json have
 * "strict": true,  Enable all strict type-checking options. (by default)
 * All options below this if true, will be implicitely set to true as well.
 * All options below this if false, will be implicitely set to false as well.
 * 
 * True is for Type safty
 * False is for dynamic coding
 */

//when "strict": false
//don't need :any
function add5(a: any, b: any): any {
  return b + a;
}

add5(1, 2); //3
add5("Hello", "World"); //'WorldHello'

//when "strict": true
function add6(a: number, b: number): number {
  return b + a;
}

add6(1, 2); //3
//add6('Hello','World'); //will result in an error due to type

class Point4 {
  x: number;
  y: number;

  //for "strict": true need to add constructor
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

const point4 = new Point4(0, 0);
point4.move(1, 3);
console.log(point4.x, point4.y);

class User2 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const users: User2[] = [
  { name: "Oby", age: 12 },
  { name: "Van", age: 21 },
];

function getUserAge(name: string): number {
  const user = users.find((user) => user.name === name);
  //for "strict": true need to add if
  if (user == null) {
    throw new Error(`User not found: ${name}`);
  }
  return user.age;
}
