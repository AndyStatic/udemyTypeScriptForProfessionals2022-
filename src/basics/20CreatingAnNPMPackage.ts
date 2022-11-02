/**
 * mkdrir palind
 * cd palind
 * npm init -y
 * npm i typescript -D
 * npx tsc --init --rootDir lib --sourceMap --declaration --declarationMap
 * create src/inxes.ts file
 * can use same export function isPalindrome from src\basics\18Modules01.ts
 * change package.json file as follows:
 *   "main": "lib",
 *   "types": "lib",
 * "scripts": {
 *          "build": "tsc"
 *      },
 * npm run build
 * will have 4 new files in lib folder:
 *  index.d.ts
 *  index.d.ts.map
 *  index.js
 *  index.js.map
 * use npm publish
 * By publishing, everyone will be able to use it via npm
 * 
 * To use it:
 * npm i palind
 * import {isPalindrome} from 'palind';
 * console.log(isPalindrome("madam")); //true
 * console.log(isPalindrome("madan")); //false
 * npx tsc - to compile
 * node lib/basics/20CreatingAnNPMPackage.js - to run
 */