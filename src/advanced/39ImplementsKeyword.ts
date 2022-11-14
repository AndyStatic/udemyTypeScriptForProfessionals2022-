type Animal39 = {
  name: string;
  voice(): string;
};

function log(animal: Animal39) {
  console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

class Cat39 implements Animal39 {
  constructor(public name: string) {}
  voice() {
    return "meow";
  }
}

class Dog39 implements Animal39 {
  constructor(public name: string) {}
  voice() {
    return "woof";
  }
}

log(new Cat39("Catso"));
log(new Dog39("Dogso"));
