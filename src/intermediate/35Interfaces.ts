type Point2D351 = {
  x: number;
  y: number;
};

type Point3D351 = Point2D351 & {
  z: number;
};

export const point351: Point3D351 = {
  x: 0,
  y: 0,
  z: 0,
};

//interfaces syntax is similar to class
interface Point2D352 {
  x: number;
  y: number;
}

interface Point3D352 extends Point2D352 {
  z: number;
}

export const point352: Point3D352 = {
  x: 0,
  y: 0,
  z: 0,
};

//required for next reason:
//1st familariaty with interfaces instead of types, as it's allows to create same chierarchy
//2nd - lesson 36
