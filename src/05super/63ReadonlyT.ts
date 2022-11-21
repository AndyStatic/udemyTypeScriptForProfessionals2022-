/**
 * Make all properties in T readonly
 * part of TS library definitions
 */
export type Readonly63<T> = {
    readonly [P in keyof T]: T[P];
};

type Point631 = { x: number; y: number };

//Same as `{ readonly x: number; readonly y: number}`
type ReadonlyPoint631 = Readonly<Point631>;

function makeReadonly<T>(object: T): Readonly<T> {
    return Object.freeze({ ...object });
}


const editablePoint = { x: 0, y: 0 };
editablePoint.x = 2; // Success: allowed


const readonlyPoint = makeReadonly(editablePoint);
//readonlyPoint.x = 3; // Error: readonly