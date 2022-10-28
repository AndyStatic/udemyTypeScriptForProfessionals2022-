//primitive types
let isPresent = false; //boolen
let magic = 66.6; //number
let hello = "world"; //string

let notDefined = undefined; //to indicate that value is not yet defined
let notPresent = null; //to indicate that value is not yet present

//modern js premetives
//https://www.typescriptlang.org/docs/handbook/symbols.html
let penta = Symbol("star");
//this not works now due to https://stackoverflow.com/questions/57560501/bigint-literals-are-not-available-when-targeting-lower-than-esnext
//let biggy = 24n; //very large number

let isPresent2: boolean = false; //boolen
let magic2: number = 66.6; //number
let hello2: string = "world"; //string

let notDefined2: undefined = undefined; //to indicate that value is not yet defined
let notPresent2: null = null; //to indicate that value is not yet present

//modern js premetives
//https://www.typescriptlang.org/docs/handbook/symbols.html
let penta2: symbol = Symbol("star");
//this not works now due to https://stackoverflow.com/questions/57560501/bigint-literals-are-not-available-when-targeting-lower-than-esnext
//let biggy2: bigint = 24n; //very large number