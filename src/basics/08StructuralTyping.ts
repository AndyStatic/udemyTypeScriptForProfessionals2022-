type User = { id: string };
type Product = { id: string };

let user: User = { id: "user-a123" };
let product: Product = { id: "product-a123" };

//because types User and Product has the same structure, they are types compatible
user = product;
product = user;

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

//Extra info is ok
//Can assign Point3D to Point2D because it has same mambers as Point2D + some extra
point2D = point3D;
function takesPoint2D(point: Point2D) {}
takesPoint2D(point3D);

//Missing info will result in error
//point3D = point2D;
function takesPoint3D(point: Point3D) {}
//takesPoint3D(point2D);
