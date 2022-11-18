export type Point58 = { x: number; y: number; z: number };

type ReadonlyPoint581 = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
};

type ReadonlyPoint582 = { [Item in "x" | "y" | "z"]: number };
type ReadonlyPoint583 = { readonly [Item in keyof Point58]: Point58[Item] };
type Readonly583<T> = { readonly [Item in keyof T]: T[Item] };

const center581: Point58 = {
  x: 0,
  y: 0,
  z: 0,
};

const center582: ReadonlyPoint581 = {
  x: 0,
  y: 0,
  z: 0,
};

//center582.x = 100; //should error

const center583: Readonly583<Point58> = {
  x: 0,
  y: 0,
  z: 0,
};

//internal implimentation of the same
const center584: Readonly<Point58> = {
  x: 0,
  y: 0,
  z: 0,
};

//center584.x = 100; //should error
