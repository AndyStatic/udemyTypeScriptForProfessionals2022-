function double(this: any) {
  this.value = this.value * 2;
}

const valid = {
  value: 10,
  double,
};

valid.double();

console.log(valid.value); //20

const invalid = {
  valve: 10,
  double,
};

invalid.double(); //Error, due to wrong spalling; but no error in TS

function double502(this: { value: number }) {
  this.value = this.value * 2;
}

const valid502 = {
  value: 10,
  double502,
};

const invalid502 = {
  valve: 10,
  double502,
};

valid502.double502();
//invalid502.double502(); //error in TS due to typo