type Point8 = {
  x: number;
  y: number;
};

let point8: Point8;

function initialize() {
  point8 = { x: 0, y: 0 };
}

initialize();
//console.log('After initialized', point8.x, point8.y); //this will end up in an error because compiler thinks it might be still undefined
console.log("After initialized", point8!.x, point8!.y); //by using (!) non-null assertion we can help to recognize that values will be defined

//better code will be as follows

function initialize2(): Point8 {
  return { x: 0, y: 0 };
}

const point82 = initialize2();

console.log("After initialized2", point82.x, point82.y);

type Person6 = {
  name: string;
  email?: string | null | undefined;
};

function sendEmail(email: string) {
  console.log("Send email to", email);
}

function ensureContactable(person: Person6) {
  if (person.email == null)
    throw new Error(`Person ${person.name} is not contactable`);
}

function contact3(person: Person6) {
  ensureContactable(person);
  sendEmail(person.email!);
}

function contact4(person: Person6) {
  if (person.email == null)
    throw new Error(`Person ${person.name} is not contactable`);
  sendEmail(person.email);
}
