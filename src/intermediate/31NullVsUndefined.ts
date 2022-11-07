let notDefined1: undefined = undefined;
let notPresent1: null = null;

class Point5 {
  x: number;
  y: undefined;

  constructor(x: number, y: undefined) {
    this.x = x;
    this.y = y;
  }
}

const center5 = new Point5(0, notDefined1);
center5.x = 0;
//center5.y = 0;

console.log(center5.x, center5.y); // 0, undefined

function logVowels(value: string) {
  console.log(value.match(/[aeiou]/gi));
}

logVowels("hello"); //['e', 'o']
logVowels("sky"); // null

console.log(null == null); //true
console.log(undefined == undefined); //true

console.log(undefined == null); //true

console.log(false == null); //false
console.log(0 == null); //false
console.log("" == null); //false

function someBooleanOrNullOrUndefined(): boolean | null | undefined {
  console.log("invoked someBooleanOrNullOrUndefined");
  return;
}
const result = someBooleanOrNullOrUndefined();
if (result == null) {
  console.log("Null or Undefined", result); //null | undefined
}
if (result != null) {
  console.log("Boolean", result); //true | false
}

function decorate(value: string | null | undefined) {
  if (value == null) {
    return value;
  }
  //console.log(`-- ${value.trim()} --`);
  return `-- ${value.trim()} --`;
}

console.log(decorate("Hello")); // -- Hello --
console.log(decorate("Hello World")); // -- Hello World --

console.log(decorate(null)); // null
console.log(decorate(undefined)); // undefined
