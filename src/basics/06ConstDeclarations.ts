type Point2 = { x: number; y: number };

const point = { x: 0, y: 0 };
const point2: Point2 = { x: 0, y: 0 };
//const point3: Point2 = { xx: 0, y: 0 }; // will result in error due to incorrect property
//You can't reassign variable that has been declared with const
//point2 = { x: 1, y: 0 }; // will result in error due to it's being const

//All other behaviours are the same as 'let'
point2.x = 123;
point2.y = 456;