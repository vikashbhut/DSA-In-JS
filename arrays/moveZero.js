function bruteForce(arr) {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  for (let i = temp.length - 1; i < arr.length; i++) {
    arr[i] = 0;
  }

  console.log(arr);
}

function optimal(arr) {
  //Find first zero num index
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }
  if (j == -1) return;
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  console.log(arr);
}

optimal([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]);
