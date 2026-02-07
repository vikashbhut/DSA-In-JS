/**
 * Given an array, print all the elements which are leaders.
 * A Leader is an element that is greater than all of the elements on its right side in the array.
 *
 * Input = [10, 22, 12, 3, 0, 6]
 *  Output = [22,12,6]
 */

function brute(arr) {
  let leaders = [];
  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      leaders.push(arr[i]);
    }
  }
  console.log(leaders);
}

function optimal(arr) {
  let max = -Infinity;
  let leaders = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      leaders.push(max);
    }
  }
  console.log(leaders);
}

optimal([10, 22, 12, 3, 0, 6]);
