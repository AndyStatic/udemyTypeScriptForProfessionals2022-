//Built-in classes:
let regexp = new RegExp("ab+c");

let array = [1, 2, 3];

//class for unique set of items
let set = new Set([1, 2, 3]);

let regexp2: RegExp = new RegExp("ab+c");

let array2: Array<number> = [1, 2, 3];

//class for unique set of items
let set2: Set<number> = new Set([1, 2, 3]);

/** A first in first out collection */
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();
