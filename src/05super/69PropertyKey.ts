const str691: string = "key";
const num691: number = 1337;
const sym691: symbol = Symbol();

const valid691 = {
    [str691]: "valid",
    [num691]: "valid",
    [sym691]: "valid",
};

const obj691 = {};

const invalid691 = {
    //[obj691]: 'invalid', // Error
};

//already provided by compiler as part of TS
type ValidKey691 = keyof any;

let example691: ValidKey691;
example691 = str691;
example691 = num691;
example691 = sym691;
//example691 = obj691; // Error

let example692: PropertyKey;
example692 = str691;
example692 = num691;
example692 = sym691;
