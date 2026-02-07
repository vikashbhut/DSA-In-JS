/**
  Input: nums = [1,2,3,4,5,6,7], k = 1
Output: [2,3,4,5,6,7,1]
 */

function rotateLeft1Place(arr) {
  const temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  console.log(arr);
}

function rotateLeftByDplace(arr, d) {
  const n = arr.length;
  d = d % n;
  let temp = [];

  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }

  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  for (let i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }

  console.log(arr);
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateLeftByDplaceOptimal(arr, d) {
  const n = arr.length;
  d = d % n;

  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);
  console.log(arr);
}

rotateLeftByDplaceOptimal([1, 2, 3, 4, 5, 6, 7], 3);
