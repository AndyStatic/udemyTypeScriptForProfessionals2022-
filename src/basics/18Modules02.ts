//import module from 18Modules.ts into this file 
//import {} from '';

import {isPalindrome} from './18Modules01';
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("madan")); //false

import * as utils from './18Modules01';

console.log(utils.isPalindrome("madam")); //true
console.log(utils.isPalindrome("madan")); //false


