function secondSmallestBruteForce(arr = [3, 3, 6, 5, 4]) {
  arr.sort((a, b) => a - b); //Nlogn

  const smallest = arr[0];

  let secondSmallest = Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > smallest) {
      secondSmallest = arr[i];
      break;
    }
  }
  return secondSmallest;
}

function secondSmallestBetter(arr = [3, 3, 6, 5, 4]) {
  let smallest = arr[0];
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

function secondSmallestOptimal(arr = [3, 3, 6, 5, 4]) {
  let smallest = arr[0];
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

console.log(secondSmallestOptimal());
