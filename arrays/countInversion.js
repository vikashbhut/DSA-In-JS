//Count inversions in an array

//Brute Force Approach
function countInversions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}

//Optimize approach
function merge(arr, low, mid, high) {
  // Temporary array
  let temp = [];

  // Starting indices of left and right halves
  let left = low;
  let right = mid + 1;

  // Variable to count inversions
  let cnt = 0;

  // Merge elements in sorted order
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      cnt += mid - left + 1; // Count inversions
      right++;
    }
  }

  // Copy remaining elements of left half
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // Copy remaining elements of right half
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // Copy back to original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return cnt;
}

function mergeSort(arr, low, high) {
  // Variable to count inversions
  let cnt = 0;

  if (low >= high) return cnt;

  let mid = Math.floor((low + high) / 2);

  // Count inversions in left half
  cnt += mergeSort(arr, low, mid);
  // Count inversions in right half
  cnt += mergeSort(arr, mid + 1, high);
  // Count inversions during merge
  cnt += merge(arr, low, mid, high);

  return cnt;
}

//Example usage:
const arr = [5, 4, 3, 2, 1];
console.log(mergeSort(arr, 0, arr.length - 1)); // Output: 10
