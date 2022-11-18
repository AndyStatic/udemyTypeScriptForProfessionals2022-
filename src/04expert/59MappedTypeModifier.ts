export type Point591 = {
  readonly x: number;
  y?: number;
};

export type Mapped<T> = {
  readonly [P in keyof T]?: T[P];
  //can use + and - tokens to add/remove nature for type props
  //+readonly [P in keyof T]-?: T[P];
  //-readonly [P in keyof T]+?: T[P];
};

export type Result59 = Mapped<Point591>;

//this partial already exist inline by Partial<T>
export type Partial591<T> = {
  [P in keyof T]?: T[P];
};

export class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
console.log(state.current); //{x: 0, y: 123}
