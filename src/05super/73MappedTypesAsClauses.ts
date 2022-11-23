type State73 = {
  name: string;
  age: number;
};

type Setters731 = {
  [K in keyof State73]: (value: State73[K]) => void;
};

type SetProperty731<K extends string> = `set${Capitalize<K>}`;

type ExampleName73 = SetProperty731<"name">; // setName
type ExampleAge73 = SetProperty731<"age">; // setAge

type Setters732 = {
  [K in keyof State73 as `set${Capitalize<K>}`]: (value: State73[K]) => void;
};

//more generic
type Setters733<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (
    value: State[K]
  ) => void;
};

type Getters733<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
};

export type Store<State> = Setters733<State> & Getters733<State>;

type PersonState73 = {
  name: string;
  age: number;
};

type PersonStore = Store<PersonState73>;

declare const personStore: PersonStore;
personStore.setName("John");
personStore.setAge(20);
const name73: string = personStore.getName();
const age73: number = personStore.getAge();
