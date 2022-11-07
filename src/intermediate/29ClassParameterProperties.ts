class Person2 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const adam = new Person2("Adam", 120000);
console.log("name: ", adam.name, "age: ", adam.age); //"Adam", 120000

//can convert into
class Person3 {
  constructor(public name: string, public age: number) {}
}

const adam2 = new Person3("Adam", 120000);
console.log("name: ", adam2.name, "age: ", adam2.age); //"Adam", 120000
