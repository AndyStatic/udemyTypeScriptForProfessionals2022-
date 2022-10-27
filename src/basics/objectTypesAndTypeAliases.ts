let center = {
  x: 0,
  y: 0,
};

let center2: { x: number; y: number } = {
  x: 0,
  y: 0,
};

let unit: { x: number; y: number } = {
  x: 1,
  y: 1,
};

//define and reuse types by using type alias
type Point = { x: number; y: number };

let center3: Point = {
  x: 0,
  y: 0,
};

let unit2: Point = {
  x: 1,
  y: 1,
};
