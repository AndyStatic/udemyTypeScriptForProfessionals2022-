type IsArray561<T> = T extends Array<any> ? "array" : "other";

type WithArray = IsArray561<string[]>;
type WithoutArray = IsArray561<number>;

type IsArray562<T> = T extends Array<infer Member> ? "array" : "other";

type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

type UnboxStringArray = UnboxArray<string[]>;
type UnboxNumberArray = UnboxArray<number[]>;
type AnythingElse = UnboxArray<string>;

export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  };

  type ReturnType571<T> = T extends (...args: any) => infer R ? R : never;

  type Person = ReturnType571<typeof createPerson>;

  function logPerson571(person: Person) {
    console.log("Person:", person.firstName, person.lastName, person.fullName);
  }

  //can do all inline
  function logPerson572(person: ReturnType<typeof createPerson>) {
    console.log("Person:", person.firstName, person.lastName, person.fullName);
  }
}
