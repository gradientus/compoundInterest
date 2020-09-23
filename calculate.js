let principal = 100000;
let rate = .03;
let numb = 1;
let time = 1;
let totalValue;

totalValue = principal * (1 + rate/numb)**(numb * time);
console.log(totalValue.toFixed(2));