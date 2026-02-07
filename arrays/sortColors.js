/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Dutch National Flag Algo

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
 * 
 * 
 */

//Better
console.time("better");
function better(arr) {
  let cnt0 = 0,
    cnt1 = 1,
    cnt2 = 2;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      cnt0++;
    } else if (arr[i] == 1) {
      cnt1++;
    } else {
      cnt2++;
    }
  }

  for (let i = 0; i < cnt0; i++) arr[i] = 0;
  for (let i = cnt0; i < cnt0 + cnt1; i++) arr[i] = 1;
  for (let i = cnt0 + cnt1; i < arr.length; i++) arr[i] = 2;
  console.log(arr);
}
console.timeLog("better");

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

better([2, 0, 2, 1, 1, 0]);

console.time("optimal");
function optimal(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }
  console.log(arr);
}
console.timeLog("optimal");
better([2, 0, 2, 1, 1, 0]);
