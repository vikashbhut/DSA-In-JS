//[1,2,3,1,1,1,1,4,2,3]
//O(n3)
function brute(arr, target) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum == target) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  console.log(maxLength);
}

//O(n2)
function bruteTwo(arr, target) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum == target) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  console.log(maxLength);
}

//Hashing  Negative+positive+zero
function better(arr, k) {
  let n = arr.length;
  let prefixMap = new Map();
  let prefixSum = 0;
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    prefixSum += arr[i];
    if (prefixSum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }
    let remaining = prefixSum - k;

    if (prefixMap.has(remaining)) {
      let length = i - prefixMap.get(remaining);
      maxLength = Math.max(maxLength, length);
    }

    //To handle negtive and zeros
    if (!prefixMap.has(prefixSum)) {
      prefixMap.set(prefixSum, i);
    }
  }
  console.log(maxLength);
}

//2-Pointer
function betterForPostiveAndZeros(arr, k) {
  let left = 0,
    right = 0,
    prefixSum = arr[0],
    maxLength = 0,
    n = arr.length;

  while (right < n) {
    while (left <= right && prefixSum > k) {
      prefixSum -= arr[left];
      left++;
    }
    if (prefixSum == k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
    if (right < n) {
      prefixSum += arr[right];
    }
  }
  console.log(maxLength);
}

better([2, 3, 5, 1, -1], 10);
// better([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3);
