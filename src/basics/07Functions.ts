function add(a: number, b: number): number {
  return a + b;
}

function log3(message: string): void {
  console.log("LOG: ", message);
}

//idefinie number of arguments
function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

sum(1, 2); //3
sum(1, 2, 3); //6

//first class functions
//can store class in the variable
let add2;

add2 = function (a: number, b: number): number {
  return a + b;
};

let add3: (a: number, b: number) => number;
add3 = (a,b) => a+b;

type Add = (a: number, b: number) => number;
let add4: Add;
add4 = (a,b) => a+b;
