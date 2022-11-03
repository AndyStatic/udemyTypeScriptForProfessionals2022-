let direction: string;
direction = "North";
direction = "n0r7h";

let direction2: "North";
//direction2 = 'n0r7h'; //will result in error, because only value can be assigned there is the 'North'

let directionAsUnion: "North" | "East" | "West" | "South";
directionAsUnion = "East"; //can select one of 4 values

type CardinalDirection = "North" | "East" | "West" | "South";
let directionAsType: CardinalDirection;

function move(distanceMeters: number, direction: CardinalDirection) {
  console.log(`Moving ${distanceMeters} meters towards ${direction}`);
}

type DiceValues = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
    return (Math.floor(Math.random() * 6)+1) as DiceValues;
}

if(rollDice()>6){
    throw new Error('Not possible!');
}