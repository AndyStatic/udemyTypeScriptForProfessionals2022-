//js template literals
let jsTemplateLiteral;
let jsStringLiteral = "whatever";
jsTemplateLiteral = `Examlpe: ${jsStringLiteral}`; //Example: whatever
jsTemplateLiteral = `Examlpe: ${3.14}`; //Example: 3.14

let str: string;
str = "whatever you want";

let strLiteral: "hello";
//strLiteral = 'whatever you want'; //now strLiteral can only accept 'hello'

let templateLiteral: `Example: ${string}`;
templateLiteral = 'Example: hello';
templateLiteral = 'Example: world';
//templateLiteral = 'Example : world'; //error because not starts with Example:

type CSSValue601 =
    //implies px
    | number
    //number + px|em|rem
    | string;


type CSSValue602 =
    //implies px
    | number
    //number + px|em|rem
    | `${number}px`
    | `${number}em`
    | `${number}rem`

function size601(input: CSSValue602) {
    return typeof input == "number" ? input + "px" : input;
}

size601(123);
size601("123px");
size601("12em");
//size601("12ex"); //Error due to typo
size601("12rem"); //Error due to typo



type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';
type Style = `${Size}-${Color}`;

/**
 * @param style is combination of
 * Size: 'small' or 'medium' or 'large'
 * Color: 'primary' or 'secondary'
 * e.g. 'small-secondary'
*/
function applyStyle(style: Style) {
    // ...
}

applyStyle('small-primary');
applyStyle('large-secondary');
//applyStyle('media-primary'); //Error due to typo