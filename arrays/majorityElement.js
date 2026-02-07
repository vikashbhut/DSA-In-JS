/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

function brute(arr) {
  let majority = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count > majority) {
      return arr[i];
    }
  }
}

function better(arr) {
  let map = new Map();
  let majority = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    let freq = (map.get(arr[i]) || 0) + 1;
    map.set(arr[i], freq);
  }

  for (const [ele, freq] of map.entries()) {
    if (freq > majority) {
      return ele;
    }
  }
}

//Moores voting algo
function optimal(arr) {
  let count = 0,
    el,
    count1 = 0;
  let majority = Math.floor(arr.length / 2);
  //Apply moores voting
  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      el = arr[i];
      count = 1;
    } else if (arr[i] == el) {
      count++;
    } else {
      count--;
    }
  }
  //Verfiy element appearence
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == el) {
      count1++;
    }
  }

  if (count1 > majority) {
    return el;
  } else {
    return -1;
  }
}

console.log(optimal([2, 2, 1, 1, 1, 2, 2]));
