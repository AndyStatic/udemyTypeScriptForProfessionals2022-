console.log('Logged in user: ', process2.env.USER); 

//create new file env.d.ts
//move all declarations there
//declare const process2: any;

//can also run without env.d.ts file by using `npm i @types/node`
//will install new package  @types/node
//will contain this variable ref in process.d.ts

import fs from 'fs';
fs.writeFileSync('hello.txt', 'Hello world');