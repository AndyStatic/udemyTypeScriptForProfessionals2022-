const strs = {
  hello: "world",
};

console.log(strs["hello"]); //'world'

const nums = {
  1337: "leet",
};

console.log(nums[1337]); //'leet'

type Dictionary = {
  [key: string]: boolean;
};

type Person46 = {
  displayName: string;
  email: string;
};

type PersonDictioary = {
  [username: string]: Person46;
  //you can make jane required by
  jane: Person46;
};

const persons: PersonDictioary = {
  jane: { displayName: "Jane Doe", email: "jane@example.com" },
};

persons["john"] = { displayName: "John Doe", email: "john@example.com" };
console.log(persons["john"]);

delete persons["john"];

const result46 = persons["missing"];
console.log(result46, result46.email); //undefined, Error

//to catch undefined errors
type PersonDictioary46 = {
  [username: string]: Person46 | undefined;
  //you can make jane required by
  jane: Person46;
};

const persons46: PersonDictioary46 = {
  jane: { displayName: "Jane Doe", email: "jane@example.com" },
};

const result462 = persons46["missing"];
//console.log(result462, result462.email); //will result in an error due to possible undefined
