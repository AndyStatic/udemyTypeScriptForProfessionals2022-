//A FIFO (First In First Out) collection
class Queue2 {
  data: any = [];
  push(item: any) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const queue2 = new Queue2();
queue2.push(123);
queue2.push("Hello world");

console.log(queue2.pop().toPrecision(1));
//console.log(queue2.pop().toPrecision(1)); //Runtime error because 2nd item was string

//class specialization
//specially design verison of class for particular type
class NumberQueue extends Queue2 {
  push(item: number) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const numberQueue = new NumberQueue();
numberQueue.push(123);
//numberQueue.push("Hello world"); //Runtime error because sting is not allowed
numberQueue.push(456);

//Generics are helping to avoid creation of multiple base class extensions per type
class Queue3<T> {
  data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const queue3 = new Queue3<number>();
queue3.push(123);
//queue3.push("Hello world"); //Runtime error because sting is not allowed
queue3.push(456);
