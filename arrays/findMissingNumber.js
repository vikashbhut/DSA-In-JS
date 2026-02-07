/**
 *
 * @param {*} arr [1,2,4,5]
 * @param {*} n  5
 */

//Linear Search
function brute(arr, n) {
  for (let i = 1; i <= n; i++) {
    let isFound = false;
    for (let j = 0; j < arr.length; j++) {
      if (i == arr[j]) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      return i;
    }
  }
}

//Hashing
function better(arr, n) {
  let hash = new Array(n + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (hash[i] == 0) {
      return i;
    }
  }
}

//Sum approach
function optimal1(arr, n) {
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
  }

  console.log(sum);
}

function optimal2(arr, n) {
  let xor1 = 0,
    xor2 = 0;

  for (let i = 0; i < arr.length; i++) {
    xor1 = xor1 ^ (i + 1);
    xor2 = xor2 ^ arr[i];
  }

  xor1 = xor1 ^ n;

  console.log(xor1 ^ xor2);
}

optimal2([1, 2, 4, 5], 5);
