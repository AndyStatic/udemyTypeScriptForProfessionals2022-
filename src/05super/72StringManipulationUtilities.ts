export type UppercaseSimple72<T> = T extends "a"
    ? "A"
    : T extends "b"
    ? "B"
    : // .... lots more
    T;

type a72 = UppercaseSimple72<"a">;
type b72 = UppercaseSimple72<"b">;

export type UppercaseRecursive72<T> = T extends `a${infer Rest}`
    ? `A${UppercaseRecursive72<Rest>}`
    : T extends `b${infer Rest}`
    ? `B${UppercaseRecursive72<Rest>}`
    : // .... lots more
    T;

type abba721 = UppercaseRecursive72<"abba">;

//built in function to achieve the same - Uppercase
type abba722 = Uppercase<"abba">;

type Loud = "HELLO FAM";
type Quiet = Lowercase<Loud>;

type Hello72 = "fee fi fo fum";
type Better = Capitalize<Hello72>;

type UncomfortableGreeting = Uncapitalize<Loud>;

type Getter<T extends string> = `get${Capitalize<T>}`;
type Setter<T extends string> = `set${Capitalize<T>}`;

type Name = "name";

type GetName = Getter<Name>;
type SetName = Setter<Name>;