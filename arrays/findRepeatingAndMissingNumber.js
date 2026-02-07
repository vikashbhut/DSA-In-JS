//Find repeating and missing numbers in an array

//Brute Force Approach
function findRepeatingAndMissingBruteForce(arr, n) {
  let repeating = -1;
  let missing = -1;

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] === i) {
        count++;
      }
    }
    if (count === 0) {
      missing = i;
    } else if (count > 1) {
      repeating = i;
    }

    if (repeating !== -1 && missing !== -1) {
      break;
    }
  }
  return { repeating, missing };
}

//Better Approach using Hashing
function findRepeatingAndMissingHashing(arr, n) {
  const count = new Array(n + 1).fill(0);
  let repeating = -1;
  let missing = -1;

  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }

  for (let i = 1; i <= n; i++) {
    if (count[i] === 0) {
      missing = i;
    } else if (count[i] > 1) {
      repeating = i;
    }

    if (repeating !== -1 && missing !== -1) {
      break;
    }
  }
  return { repeating, missing };
}

//Optimal Approach using Mathematical Equations
function findRepeatingAndMissingOptimal(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const expectedSumSq = (n * (n + 1) * (2 * n + 1)) / 6;

  let actualSum = 0;
  let actualSumSq = 0;

  for (let i = 0; i < n; i++) {
    actualSum += arr[i];
    actualSumSq += arr[i] * arr[i];
  }

  const xMinusY = actualSum - expectedSum; // repeating - missing
  const xSqMinusYSq = actualSumSq - expectedSumSq; // repeating^2 - missing^2

  // sumSqDiff = (repeating - missing)(repeating + missing)
  // => sumSqDiff / sumDiff = repeating + missing

  const xPlusY = xSqMinusYSq / xMinusY;
  const x = (xMinusY + xPlusY) / 2;

  const y = x - xMinusY;

  return { repeating: x, missing: y };
}

//Optimal Approach XOR Method
function findRepeatingAndMissingXOR(arr, n) {
  let xorAll = 0;
  let one = 0;
  let zero = 0;

  for (let i = 0; i < n; i++) {
    xorAll ^= arr[i];
    xorAll ^= i + 1;
  }

  const setBit = (xorAll & (xorAll - 1)) ^ xorAll;

  for (let i = 0; i < n; i++) {
    if ((arr[i] & setBit) !== 0) {
      one ^= arr[i];
    } else {
      zero ^= arr[i];
    }
  }

  for (let i = 1; i <= n; i++) {
    if ((i & setBit) === 0) {
      zero ^= i;
    } else {
      one ^= i;
    }
  }

  return { one, zero };
}

//Example usage:
const arr = [3, 1, 3, 4, 2];
const n = arr.length;
const result = findRepeatingAndMissingXOR(arr, n);
console.log(result);
