//Merge 2 sorted arrays into one sorted array

function mergeSortedArraysBruteForce(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let mergedArray = [];

  let left = 0;
  let right = 0;

  while (left < n && right < m) {
    if (arr1[left] <= arr2[right]) {
      mergedArray.push(arr1[left]);
      left++;
    } else {
      mergedArray.push(arr2[right]);
      right++;
    }
  }

  while (left < n) {
    mergedArray.push(arr1[left]);
    left++;
  }

  while (right < m) {
    mergedArray.push(arr2[right]);
    right++;
  }

  for (let i = 0; i < mergedArray.length; i++) {
    if (i < n) {
      arr1[i] = mergedArray[i];
    } else {
      arr2[i - n] = mergedArray[i];
    }
  }
  return [arr1, arr2];
}

function mergeSortedArraysBetter(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  let left = n - 1;
  let right = 0;

  while (left >= 0 && right < m) {
    if (arr1[left] > arr2[right]) {
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
      left--;
      right++;
    } else {
      break;
    }
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return [arr1, arr2];
}

function mergeSortedArraysOptimal(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let totalLength = n + m;
  let gap = Math.ceil(totalLength / 2);

  while (gap > 0) {
    let left = 0;
    let right = gap;
    while (right < totalLength) {
      let leftValue = left < n ? arr1[left] : arr2[left - n];
      let rightValue = right < n ? arr1[right] : arr2[right - n];

      if (leftValue > rightValue) {
        if (left < n && right < n) {
          [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
        } else if (left < n && right >= n) {
          [arr1[left], arr2[right - n]] = [arr2[right - n], arr1[left]];
        } else {
          [arr2[left - n], arr2[right - n]] = [arr2[right - n], arr2[left - n]];
        }
      }

      left++;
      right++;
    }
    if (gap === 1) {
      gap = 0;
    } else {
      gap = Math.ceil(gap / 2);
    }
  }
  return [arr1, arr2];
}

//Example usage:
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let result = mergeSortedArraysOptimal(arr1, arr2);
console.log(result); // Output: [[1, 2, 3], [4, 5, 6]]
