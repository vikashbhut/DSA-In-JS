//3-sum problem

function threeSumBruteForce(arr) {
  let uniqueTriplets = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          uniqueTriplets.add(JSON.stringify(temp));
        }
      }
    }
  }
  return Array.from(uniqueTriplets).map((triplet) => JSON.parse(triplet));
}

//Hashing approach
function threeSumBetter(arr) {
  let uniqueTriplets = new Set();
  for (let i = 0; i < arr.length; i++) {
    let seen = new Set();
    for (let j = i + 1; j < arr.length; j++) {
      let complement = -(arr[i] + arr[j]);
      if (seen.has(complement)) {
        let temp = [arr[i], arr[j], complement];
        temp.sort((a, b) => a - b);
        uniqueTriplets.add(JSON.stringify(temp));
      } else {
        seen.add(arr[j]);
      }
    }
  }
  return Array.from(uniqueTriplets).map((triplet) => JSON.parse(triplet));
}

//Optimal two-pointer approach
function threeSumOptimal(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (arr[left] === arr[left - 1] && left < right) left++;
        while (arr[right] === arr[right + 1] && left < right) right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return triplets;
}

//Example usage:
const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSumOptimal(arr)); // Output: [[-1, -1, 2], [-1, 0, 1]]
