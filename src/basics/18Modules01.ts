/**
 * @returns true if the input string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

//console.log(isPalindrome("madam")); //true
//console.log(isPalindrome("madan")); //false

//can export function by using function "export" keyword
