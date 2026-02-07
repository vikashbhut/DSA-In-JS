/**
 * Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
function brute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}

function better(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let rem = target - arr[i];
    if (map.has(rem)) {
      return [map.get(rem), i];
    }
    map.set(arr[i], i);
  }
}

function optimal(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (left <= right) {
    const sum = arr[left] + arr[right];
    if (sum == target) {
      return "YES";
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return "NO";
}

console.log(optimal([2, 7, 11, 15], 9));
