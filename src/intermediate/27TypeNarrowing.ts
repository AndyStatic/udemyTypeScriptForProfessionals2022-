class Cat {
  meow() {
    console.log("meow");
  }
}

class Dog {
  bark() {
    console.log("woof");
  }
}

type Animal5 = Cat | Dog;

function speak(animal5: Animal5) {
  if (animal5 instanceof Cat) {
    animal5.meow();
  }
  if (animal5 instanceof Dog) {
    animal5.bark();
  }
}

type Square = { size: number };

type Rectangle = { width: number; height: number };

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    return shape.width * shape.height;
  }
}

area({ size: 2 }); //4
area({ width: 2, height: 3 }); //6
