function log(value: any) {
  console.log(value.toFixed(2));
}

log(123.456);
log("Hello world"); //this will result in error

/**Rewrite as:
 */
function log2(value: unknown) {
  if (typeof value == "number") {
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}

log(123.456);
log("Hello world");
