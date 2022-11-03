class Person {
  private _age: number;
  constructor(_age: number) {
    this._age = _age;
  }
  //calling context
  growOld() {
    this._age++;
  }
  //alternative
  growOld2 = () => {
    this._age++;
  };

  age() {
    return this._age;
  }
}

const person = new Person(0);
person.growOld();
console.log("age: ", person.age());

const growOld = person.growOld;
//growOld(); // will result as an issue in case of calling context

const growOld2 = person.growOld2;
growOld2();

setTimeout(person.growOld2, 1000);
growOld2();
setTimeout(() => console.log("age: ", person.age()), 2000);
