type Person541 = {
  name: string;
  age: number;
  location: string;
};

const john541: Person541 = {
  name: "John",
  age: 35,
  location: "Melbourne",
};

function logGet541(obj: any, key: string) {
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

const age541 = logGet541(john541, "age"); //35
console.log(logGet541(john541, "email")); //error, as email not in john541 object

function logGet542(obj: any, key: "name" | "age" | "location") {
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

//console.log(logGet542(john541, "email")); //will show error in IDE

type PersonKeys541 = keyof Person541;

function logGet543(obj: Person541, key: keyof Person541) {
  //or key: PersonKeys541
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

function logGet544<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

const age542 = logGet544(john541, "age"); //35

function logSet541<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting:", key, value);
  obj[key] = value;
}

logSet541(john541, "age", 36);
