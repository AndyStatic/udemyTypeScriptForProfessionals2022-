function error56(message: string): never {
    throw new Error(message);
}

//const notAllowed56: never = 'some string'; //can't assign string to type never
const allowed56: never = error56("this is ok");

const example56: string = error56("I will not return");

type verbose56 = string | never;
type Concise56 = string;

/**
 * Exclude null and undefined from T
 */
export type NoEmpty56<T> = T extends null | undefined ? never : T;

type Example56 = NoEmpty56<string | null>;
type Expanded056 = NoEmpty56<string> | NoEmpty56<null>;

type Expanded156 =
    | (string extends null | undefined ? never : string)
    | (null extends null | undefined ? never : string);

type Expanded256 = string | never;

type Result56 = string;