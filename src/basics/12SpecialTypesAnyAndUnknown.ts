let exampleAny: any;
let exampleUnknown: unknown;

//all types can be assigned to any and unknown;
exampleAny = 123;
exampleAny = "Hello";

exampleUnknown = 123;
exampleUnknown = "World";

//any allows to bypass TypeScript rules
exampleAny.allows.anuything.you.can.imaging();
let anySetBool: boolean = exampleAny;

//unknown still follows TypeScript rules
//exampleUnknown.trim(); //will result in error
//let anySetUnknown: boolean = exampleUnknown; //will result in error

//need to check type first
if (typeof exampleUnknown == "string") {
  exampleUnknown.trim();
}
if (typeof exampleUnknown == "boolean") {
  let anySetUnknown: boolean = exampleUnknown;
}
