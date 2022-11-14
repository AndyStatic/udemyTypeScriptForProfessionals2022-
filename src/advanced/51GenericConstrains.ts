function addFullName511<T>(obj: T): T {
  return obj;
}

function addFullName512<T>(obj: T): T {
  return {
    ...obj, //js spare operator
  };
}

type NameFields = { firstName: string; lastName: string };
function addFullName513<T extends NameFields>(
  obj: T
): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

const john511 = addFullName513({
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
});


console.log(john511.email); //john@example.com
console.log(john511.fullName); //John Doe

/* lastName is a required property
const jane511 = addFullName513({
    firstName: "John",
  });
*/