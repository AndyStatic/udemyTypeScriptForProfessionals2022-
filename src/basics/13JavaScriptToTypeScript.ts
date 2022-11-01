let someLegacyVariable;

someLegacyVariable = "a123";
console.log(someLegacyVariable.trim());

someLegacyVariable = 123;
console.log(someLegacyVariable.toFixed(2));

//if variable has no type, it's considered to be any

/**To convert legacy code, use unknown.
 * Use any for "fast" migration
 */

let someLegacyVariable2: unknown;

if (typeof someLegacyVariable2 == "string") {
  console.log(someLegacyVariable2.trim());
}
if (typeof someLegacyVariable2 == "number") {
  console.log(someLegacyVariable2.toFixed(2));
}
