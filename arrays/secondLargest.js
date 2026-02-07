function secondLaegestBruteForce(arr = [3, 5, 6, 6, 4]) {
  arr.sort((a, b) => a - b); //Nlogn

  const largest = arr[arr.length - 1];

  let secondLargest = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < largest) {
      secondLargest = arr[i];
      break;
    }
  }
  return secondLargest;
}

function secondLargestBetter(arr) {
  let largest = arr[0];
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

function secondLargestOptimal(arr) {
  let largest = arr[0];
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
