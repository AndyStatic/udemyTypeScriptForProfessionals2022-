type IsNumber<T> = T extends number ? "number" : "other";

const isNumber = (value: unknown) =>
  typeof value === "number" //condition
    ? "number" //result when condition is true
    : "other"; //result when condition is false

const withNumber551 = isNumber(123);
const withString551 = isNumber("hello");

type withNumber = IsNumber<number>;
type withString = IsNumber<string>;

export type TypeName<T> = //
  T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends symbol
    ? "symbol"
    : T extends bigint
    ? "bigint"
    : T extends Function
    ? "function"
    : "object";

function typeName<T>(t: T): TypeName<T> {
  return typeof t as TypeName<T>;
}

const str = typeName("hello world");
const num = typeName(123);
const bool = typeName(true);
const undef = typeName(undefined);
const sym = typeName(Symbol("star"));
const big = typeName(0b11111111111111111111111111111111111111111111111111111); // 9007199254740991n, this will be num because 123n not supported due to settings
const func = typeName(function () {});
const obj = typeName(null);

console.log(typeof null); //'object'
