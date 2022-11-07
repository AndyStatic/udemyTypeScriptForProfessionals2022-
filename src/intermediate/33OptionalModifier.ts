type Person5 = {
  name: string;
  email: string;
  //optional member
  phone?: string;
};

const john: Person5 = {
  name: "John",
  email: "howdy@example.com",
  phone: "1337",
};

const alfred: Person5 = {
  name: "Alfred",
  email: "howdy@example.com",
};

const boris: Person5 = {
  name: "Boris",
  email: "howdy@example.com",
  phone: undefined,
};

console.log(alfred.phone); //undefined

class Point6 {
  x: number = 0;
  y: number = 0;
}

class Point7 {
  x?: number;
  y?: number;
}

const point7 = new Point7();

console.log(point7.x); //undefined
point7.x = 0;
point7.x = undefined;
//point7.x = null; //will result in an error

//if want to support null as value
//need to ass this to support type as explicit annatation, i.e.
//x?: number | null;