type Square41 = {
  size: number;
};

type Rectangle41 = {
  width: number;
  height: number;
};

type Shape41 = Square41 | Rectangle41;

function area41(shape: Shape41) {
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    return shape.width * shape.height;
  }
  const _ensure41: never = shape;
  return _ensure41;
}

area41({ size: 2 }); //4
area41({ width: 2, height: 3 }); //6

//guards
//bolean returns
function isSquare(shape: Shape41): shape is Square41 {
  return "size" in shape;
}

function isRectangle(shape: Shape41): shape is Rectangle41 {
  return "width" in shape;
}

function area412(shape: Shape41) {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }
  const _ensure41: never = shape;
  return _ensure41;
}
