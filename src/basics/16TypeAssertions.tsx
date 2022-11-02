function load(): any {
  return 123;
}

let hello1 = load();

//another version, but will not work in tsx files, that is why it's not recommended
//think it's an element, instead of type assertion
//const trimmed2 = (<string>hello1).trim();

//can do as follows
const trimmed2 = (hello1 as string).trim();