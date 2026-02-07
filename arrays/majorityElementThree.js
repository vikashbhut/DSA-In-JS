//Brute Force
function majorityElementThreeBruteForce(arr) {
  const result = [];
  for (const num of arr) {
    if (result.length === 0 || result[0] !== num) {
      let count = 0;
      for (const element of arr) {
        if (element === num) {
          count++;
        }
      }
      if (count > Math.floor(arr.length / 3)) {
        result.push(num);
      }
    }
    if (result.length === 2) {
      break;
    }
  }
  return result;
}

//Better Approach - Hashing
function majorityElementThreeBetter(arr) {
  const map = new Map();
  const result = [];
  const threshold = Math.floor(arr.length / 3);
  for (const num of arr) {
    const count = (map.get(num) || 0) + 1;
    map.set(num, count);
    if (count > threshold) {
      result.push(num);
    }
    if (result.length === 2) {
      break;
    }
  }
  return result;
}

//Optimal Approach - Extended Moore's Voting Algorithm
function majorityElementThreeOptimal(arr) {
  let candidate1 = null,
    candidate2 = null;
  let count1 = 0,
    count2 = 0;

  for (const num of arr) {
    if (count1 === 0 && num !== candidate2) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0 && num !== candidate1) {
      candidate2 = num;
      count2 = 1;
    } else if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  //Verification step
  count1 = 0;
  count2 = 0;

  for (const num of arr) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    }
  }

  const result = [];
  const threshold = Math.floor(arr.length / 3);
  if (count1 > threshold) {
    result.push(candidate1);
  }
  if (count2 > threshold) {
    result.push(candidate2);
  }
  return result;
}

//Example usage:
let arr = [11, 33, 33, 11, 33, 11];
console.log(majorityElementThreeOptimal(arr)); // Output: [11, 33]
