/**
 * Make all properties in T optional
 * part of TS library definitions
 */
export type Partial61<T> = {
  [P in keyof T]?: T[P];
};

type Point611 = { x: number; y: number };

//Same as `{ x?: number; y?: number}`
type PartialPoint611 = Partial<Point611>;

class State61<T> {
  constructor(public current: T) {}
  //Only need to pass in the properties you want changed
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

//Usage
const state = new State61({ x: 0, y: 0 });
state.update({ y: 123 }); //Partial. No need to provide `x`.
console.log(state.current); //Update successful: {x: 0, y: 123}
