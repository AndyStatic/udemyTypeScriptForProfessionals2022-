function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray == "string") {
    return stringOrStringArray.split("").reverse().join("");
  } else {
    return stringOrStringArray.slice().reverse();
  }
}

const hello43 = reverse("hello"); //'olleh'
const h_e_l_l_o43 = reverse(["h", "e", "l", "l", "o"]); //['o','l','l','e','h']

//add functions signature
function reverse43(string: string): string;
function reverse43(stringArray: string[]): string[];
//handle overload cases
function reverse43(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray == "string") {
    return stringOrStringArray.split("").reverse().join("");
  } else {
    return stringOrStringArray.slice().reverse();
  }
}

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
//it shadows internal function signature
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear);
  }
}

const doomsday = makeDate(2000, 1, 1); //1 Jan 2000
const epoch = makeDate(0); //1 Jun 1970

//const invalid = makeDate(2000, 1 /** Error: ignored */); //by adding functions signature, this will not be available anymore
