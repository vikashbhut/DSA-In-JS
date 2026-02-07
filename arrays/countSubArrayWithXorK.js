//Count sub arrays with xor equal to k

//Brute Force Approach
function countSubarraysXorBruteForce(arr, k) {
  let count = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let xorValue = 0;
      for (let k = i; k <= j; k++) {
        xorValue ^= arr[k];
        if (xorValue === k) {
          count++;
        }
      }
    }
  }
  return count;
}

//Better Approach
function countSubarraysXorBetter(arr, k) {
  let count = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let xorValue = 0;
    for (let j = i; j < n; j++) {
      xorValue ^= arr[j];
      if (xorValue === k) {
        count++;
      }
    }
  }
  return count;
}

//Optimal Approach
function countSubarraysXorOptimal(arr, k) {
  let count = 0;
  const prefixXorMap = new Map();
  let prefixXor = 0;

  prefixXorMap.set(0, 1); // To handle the case when prefixXor itself is equal to k
  for (let num of arr) {
    prefixXor ^= num;

    const requiredXor = prefixXor ^ k;
    if (prefixXorMap.has(requiredXor)) {
      count += prefixXorMap.get(requiredXor);
    }

    prefixXorMap.set(prefixXor, (prefixXorMap.get(prefixXor) || 0) + 1);
  }
  return count;
}

//Example usage:
const arr = [4, 2, 2, 6, 4];
const k = 6;
console.log(countSubarraysXorOptimal(arr, k)); // Output: 4
