function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let min = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}

function selectionSortRecursive(arr, index) {
  if (index === arr.length - 1) {
    console.log(arr);
    return;
  }
  let min = index;
  for (let i = index; i < arr.length; i++) {
    if (arr[i] < arr[min]) min = i;
  }
  let temp = arr[min];
  arr[min] = arr[index];
  arr[index] = temp;
  selectionSortRecursive(arr, index + 1);
}

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let didSwap = false;
    for (let j = 0; j <= n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = true;
      }
    }
    if (!didSwap) {
      break;
    }
  }
  console.log(arr);
}

function bubbleSortRecursive(arr, n) {
  if (n <= 1) {
    console.log(arr);
    return;
  }
  let didSwap = false;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      didSwap = true;
    }
  }
  if (!didSwap) {
    console.log(arr);
    return;
  }
  bubbleSortRecursive(arr, n - 1);
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }

  console.log(arr);
}

function insertionSortRecursive(arr, index) {
  if (index >= arr.length) {
    console.log(arr);
    return;
  }
  let j = index;
  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
    j--;
  }
  insertionSortRecursive(arr, index + 1);
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i = i + 1;
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  i = i + 1;
  let temp = arr[high];
  arr[high] = arr[i];
  arr[i] = temp;
  return i;
}

function QuickSort(arr, low, high) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    QuickSort(arr, low, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, high);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
QuickSort(arr, 0, 6);
console.log(arr);
