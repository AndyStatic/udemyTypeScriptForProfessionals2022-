//Array
let array3: Array<number> = [1, 2, 3];
let array4: number[] = [1, 2, 3];

//Usage
array4 = [1];
array4 = [1, 2, 3, 4, 5];
//array4 = ['hello'] //Error, because it is array of numbers

//fixed length array, also called Tuple
let tuple: [number, number] = [0, 0];

//Tuple Usage
tuple = [1, 1];
tuple = [2, 6];
//tuple = [1]; //less than 2 numbers will result in error
//tuple = [1, 2, 3]; //more than 2 numbers will result in error
//tuple = ['hello', 6]; //both must be numbers