const center521: { x: number; y: number; z: number } = {
  x: 0,
  y: 0,
  z: 0,
};

const unit521: { x: number; y: number } = {
  x: center521.x + 1,
  y: center521.y + 1,
};

type Point521 = { x: number; y: number; z: number };
type Point522 = typeof center521; //generates a type from variable in code

const unit522: Point522 = {
  x: center521.x + 1,
  y: center521.y + 1,
  z: center521.z + 1,
};

//inline
const unit523: typeof center521 = {
  x: center521.x + 1,
  y: center521.y + 1,
  z: center521.z + 1,
};

//example.json
const personResponse = {
  name: "john",
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
};

type PersonResponse = typeof personResponse;

function processResponse(person: PersonResponse) {
  console.log("Full name:", `${person.firstName} ${person.lastName}`);
}
