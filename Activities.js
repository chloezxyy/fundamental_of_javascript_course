function quadFunc(a, b, c) {
  let del = b ** 2 - 4 * a * c;
  if (del > 0) {
    console.log("del:", del);
    let x1 = (-b + del ** 0.5) / (2 * a);
    let x2 = (-b - del ** 0.5) / (2 * a);
    console.log("x1: ", x1, " x2: ", x2);
    return [x1, x2];
  }
}
quadFunc(2, -2, -24);

function angryBird(a, b) {
  let g = 9.81;
  // convert degree to radians
  b = (b * Math.PI) / 180;
  let d = (a ** 2 * Math.sin(2 * b)) / g;
  console.log(`angry bird travelled ${d}m`);
  return d;
}
angryBird(3, 50);

function incomeTax(income) {
  if (income > 20000) {
    let taxedIncome = 0.05 * (income - 20000);
    console.log(taxedIncome);
    return taxedIncome;
  } else {
    console.log("Not taxable");
  }
}
// Prof's solution
// function incomeTax(income){
//   let tax = (income<=20000) ? 0 : 0.05 * (income - 20000);
//   console.log(`tax payable on income $${income} is $${tax}`);
// }
incomeTax(30000);

function ask_user_age() {
  let message = "What is your age?";
  let user_value = window.prompt(message);
  if (user_value == "") {
    console.log("No params given");
  } else if (user_value == 0) {
    console.log("Your age is -ve, should at least be 1");
  } else if (user_value > 122) {
    console.log(`Oh you're ${user_value}... really`);
  } else {
    console.log(`Cool you're ${user_value}`);
  }
}
ask_user_age();

function collatz(n) {
  console.log(n);
  while (n !== 1) {
    n = n % 2 == 0 ? n / 2 : n * 3 + 1;
    console.log(n);
  }
}
collatz(10);
