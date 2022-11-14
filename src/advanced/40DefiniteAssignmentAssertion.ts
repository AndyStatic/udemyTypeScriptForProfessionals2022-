let dice40: number;

function rollDice40() {
  dice40 = Math.floor(Math.random() * 6) + 1;
}

rollDice40();

//console.log(`Current Dice Value`, dice); //will result in error because we are assigning value only later on and not directly at inicialization
//can fix by
console.log(`Current Dice Value`, dice40!);

//another approach
//use definite assignment assertions
//as ! next to variable
let dice402!: number;

console.log(`Current Dice Value`, dice402);

class Point40 {
  x!: number;
  y!: number;

  constructor() {
    //this.x = Math.random();
    //this.y = Math.random();
    //to avoid duplication
    this.moveRandom();
  }

  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}
