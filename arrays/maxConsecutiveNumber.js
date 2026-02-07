// arr = [1,1,0,1,1,1,0,1,1]

function optimal(arr) {
  let counter = 0,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
      max = Math.max(max, counter);
    } else {
      counter = 0;
    }
  }
  console.log(max);
}

optimal([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1]);
