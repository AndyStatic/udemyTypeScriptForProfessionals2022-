type Circle = {
  kind: "circle";
  radius: number;
};

type Square2 = {
  kind: "square";
  size: number;
};

type Rectangle2 = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape2 = Square2 | Rectangle2 | Circle;

function area2(shape: Shape2) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  if (shape.kind === "square") {
    return shape.size * shape.size;
  }
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
}

area2({ kind: "square", size: 2 }); //4
area2({ kind: "rectangle", width: 2, height: 3 }); //6

type ValidationSuccess = {
  isValid: true;
  validatedValue: string;
};

type ValidationFailure = {
  isValid: false;
  errorReason: string;
};

type ValidationResult = ValidationSuccess | ValidationFailure;

function logResult(result: ValidationResult) {
  if (result.isValid) {
    console.log("Success, validated value:", result.validatedValue);
  }
  if (result.isValid === false) {
    console.log("Failure, error reason:", result.errorReason);
  }
}
