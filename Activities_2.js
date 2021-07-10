// sorting alphabetically
function mysort(val1, val2) {
  return val1 > val2 ? 1 : val1 < val2 ? -1 : 0;
}

function median(arr) {
  arr = arr.sort(mysort);
  let n = arr.length;
  // even
  if (n % 2 == 0) {
    return (arr[n / 2] + arr[n / 2 - 1]) / 2;
  } else {
    return arr[(n - 1) / 2];
  }
}
console.log(median([5, 7, 3, 8, 6]));

function middleArr(arr) {
  return arr.slice(1, arr.length - 1);
}
console.log(middleArr([1, 4, 3, 5]));

function sum_odd_numbers(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0 && arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}
console.log(sum_odd_numbers([43, 30, 27, -3]));

function moving_av(arr) {
  let output = [];
  for (let i = 0; i < arr.length - 2; i++) {
    // console.log(arr[i]);
    let inner = arr.slice(i, i + 3);
    let sumOfThree = inner.reduce((a, b) => a + b) / 3;
    output.push(sumOfThree.toFixed(2));
  }
  return output;
}
console.log(moving_av([30.0, 20.0, 40.0, 50.0, 25.0, 70.0]));

function swap_elements(arr, id1, id2) {
  let n = arr.length;
  let deepArr = JSON.parse(JSON.stringify(arr)); // or .concat()
  if (id1 < 0 || id2 < 0 || id1 >= n || id2 >= n) return null;
  else {
    deepArr[id1] = arr[id2];
    deepArr[id2] = arr[id1];
    return deepArr;
  }
}
let arr = [3, 6, 8, 7];
console.log(swap_elements(arr, 1, 0));
// console.log(swap_elements(arr, 3, 4));

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = 10;
for (let k = 0; k < n + 1; k++) {
  console.log(fibonacci(k));
}

function GCD(a, b) {
  if (a == 0 || b == 0) {
    return 0;
  }
  if (a == b) {
    return a;
  }
  if (a > b) {
    return GCD(a - b, b);
  } else {
    return GCD(a, b - a);
  }
}
console.log(GCD(30, 50));

function mcCarthy91(n) {
  // base case
  if (n > 100) {
    return n - 10;
  }
  return mcCarthy91(mcCarthy91(n + 11));
}
for (let k = -10; k < 110; k++) {
  console.log(mcCarthy91(k));
}

function move_disc(n, from_tower, aux_tower, to_tower) {
  // if number of disc = 1, move from_tower to to_tower
  if (n == 1) {
    console.log(` IF: Move disc 1 from ${from_tower} to ${to_tower}`);
    return;
  } else {
    // the # of disc move it from_tower to to_tower
    move_disc(n - 1, from_tower, to_tower, aux_tower);
    console.log(` ELSE: Move disc ${n} from ${from_tower} to ${to_tower}`);
    // recall func until # of disc = 1
    move_disc(n - 1, aux_tower, from_tower, to_tower);
    // no return statement -> therefore giving undefined
  }
}
console.log(move_disc(3, "A", "B", "C"));
