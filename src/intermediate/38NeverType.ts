const fail = (message: string) => {
  throw new Error(message);
};

const sing = function () {
  while (true) {
    console.log("a");
    console.log("b");
    console.log("c");
  }
};

let example38: never;
//let example382: never = 123; //will result in error, as it's type never

type Square381 = {
  kind: "square";
  size: number;
};

type Rectangle381 = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape381 = Square381 | Rectangle381;

function area381(s: Shape381) {
  if (s.kind === "square") {
    return s.size * s.size;
  }
  if (s.kind === "rectangle") {
    return s.width * s.height;
  }
  const _ensureAllCasesAreaHandled: never = s;
  return _ensureAllCasesAreaHandled;
}

//this helps to find issues quickly,
//i.e. when try to extend Shape381 for Circle, will get error to handle case in area381
