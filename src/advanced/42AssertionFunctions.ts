type Person42 = {
  name: string;
  dateOfBirth?: Date;
};

//assertion function specification
//: asserts condition
function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  else throw new TypeError("value is not a Date");
}

function loadPerson() {
  let person42: Person42 = {
    name: "",
  };
  return person42;
}

const maybePerson: Person42 = loadPerson();

assert(maybePerson != null, "Could not load person");

console.log("Name:", maybePerson.name);

assertDate(maybePerson.dateOfBirth);

console.log("Date Of Birth:", maybePerson.dateOfBirth.toISOString());
