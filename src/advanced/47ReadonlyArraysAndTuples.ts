function reverseSorted471(input: number[]): number[] {
  return input.sort().reverse();
}

const start471 = [1, 2, 3, 5, 4];
const reult471 = reverseSorted471(start471);

console.log(result); //[5,4,3,2,1]
//reverse function also mutated initial array
//sort() and reverse() does this to original arrays
console.log(start471); //[5,4,3,2,1]

function reverseSorted472(input: readonly number[]): number[] {
  //.slice() creates a copy of input array, which is not readonly
  return input.slice().sort().reverse();
}

const start472 = [1, 2, 3, 5, 4];
const reult472 = reverseSorted472(start471);

console.log(result); //[5,4,3,2,1]
console.log(start471); //[1, 2, 3, 5, 4]

type Neat471 = number[];
type Long471 = Array<number>;

type Neat472 = readonly number[];
type Long472 = ReadonlyArray<number>;

type Point471 = [number, number];

function move471(point: Point471, x: number, y: number): Point471 {
  point[0] += x;
  point[1] += y;
  return point;
}

const point471: Point471 = [0, 0];
const moved471 = move471(point471, 10, 10);

console.log(moved471); //[10, 10]
//will mutate input point as well
console.log(point471); //[10, 10]

type Point472 = readonly [number, number];

function move472(point: Point472, x: number, y: number): Point472 {
  //need to return new tuple
  return [point[0] + x, point[1] + y];
}

const point472: Point472 = [0, 0];
const moved472 = move472(point472, 10, 10);

console.log(moved472); //[10, 10]
//no more mutate of original point
console.log(point472); //[0, 0]
