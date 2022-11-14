type Point2D48 = { x: number; y: number };
type Point3D48 = { x: number; y: number; z: number };

type Person48 = {
  name: string;
  email: string;
};

let point2D48: Point2D48 = { x: 0, y: 0 };
let point3D48: Point3D48 = { x: 10, y: 10, z: 10 };
let person48: Person48 = { name: "John", email: "john@example.com" };

point2D48 = point3D48;
//point3D48 = point2D48; //error
point3D48 = point2D48 as Point3D48; //ok, I trust you

//point3D48 = person48 as Point3D48; //error, don't trust you enough - not enough common members to overlap
point3D48 = person48 as unknown as Point3D48; //ok, I trust you
