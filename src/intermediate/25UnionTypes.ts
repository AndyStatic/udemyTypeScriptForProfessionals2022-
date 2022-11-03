/**
 *
 * @param input a command or an array of commands
 * @returns a single trimmed string
 */
function formatCommandline(input: string | string[]) {
  let line = "";
  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((x) => x.trim()).join(" ");
  }
  return line;
}

console.log(formatCommandline("hello ")); // 'hello'
console.log(formatCommandline(["hello ", " world "])); // 'hello world'
//console.log(formatCommandline(123)); //error due to being number

/**
 * Takes a sting and addd `padding` to the left.
 * If `padding` is a number, than that number of spaces is added to the left.
 * If `padding` is a string, than `padding` is appended to the left.
 */
function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected number or string, got '${padding}'.`);
}

padLeft("Hello world", 4); // '    Hello world'
padLeft("Hello world", " "); // ' Hello world'
padLeft("Hello world", "___"); // '___Hello world'
//padLeft('Hello world', false); // Error

type Padding = number | string;
