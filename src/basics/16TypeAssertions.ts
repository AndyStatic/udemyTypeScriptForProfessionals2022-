function load(): any {
  return 123;
}

let hello1 = load();

//const trimmed = hello1.trim(); //will result in an error, because you don't know what it can be

//can chnage to
//but not good for performance
//This is a correct way to use overall
if (typeof hello1 === "string") {
  const trimmed = hello1.trim();
}

//we says to compiler that this will be for sure string
//We might be wrong, that is why need to use check as above
const trimmed1 = (hello1 as string).trim();
//another version, but will not work in tsx files, that is why it's not recommended
//see 16TypeAssertions
const trimmed2 = (<string>hello1).trim();
