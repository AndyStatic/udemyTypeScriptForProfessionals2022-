type Point2D2 = {
  x: number;
  y: number;
};

type Point3D2 = {
  x: number;
  y: number;
  z: number;
};

//works similar to class inheritance
//has all member of Point2D2 + z
type Point3D3 = Point2D2 & {
  z: number;
};

type Person4 = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

function contact(details: Person4 & Email & Phone) {
  console.log(`Dear ${details.name}.
    I hope you received our email at ${details.email}.
    We will call you at ${details.phone} shortly.
    `);
}

contact({
  name: "John",
  email: "howdy@example.com",
  phone: "1337",
});

//
type ContactDetails = Person4 & Email & Phone;
function contact2(details: ContactDetails) {
  console.log(`Dear ${details.name}.
      I hope you received our email at ${details.email}.
      We will call you at ${details.phone} shortly.
      `);
}
