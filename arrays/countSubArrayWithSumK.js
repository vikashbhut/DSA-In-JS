// Brute Force Approach - O(n^3) time complexity
function countSubArrayWithSumKBrute(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

// Improved Approach - O(n^2) time complexity
function countSubArrayWithSumKBetter(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

// Optimal Approach - O(n) time complexity
function countSubArrayWithSumKOptimal(arr, k) {
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1); // To handle the case when subarray starts from index 0

  let count = 0;
  let prefixSum = 0;

  for (const num of arr) {
    prefixSum += num;

    if (prefixSumCount.has(prefixSum - k)) {
      count += prefixSumCount.get(prefixSum - k);
    }

    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
  }
  return count;
}

//Example usage:
const arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
const k = 3;
console.log(countSubArrayWithSumKOptimal(arr, k)); // Output: 8
