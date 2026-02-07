function fourSumBrute(nums) {
  const quadruplets = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === 0) {
            let temp = [nums[i], nums[j], nums[k], nums[l]];
            temp.sort((a, b) => a - b);
            quadruplets.add(JSON.stringify(temp));
          }
        }
      }
    }
  }
  return Array.from(quadruplets).map((quadruplet) => JSON.parse(quadruplet));
}

function fourSumBetter(nums) {
  let uniqueQuadruplets = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let seen = new Set();
      for (let k = j + 1; k < nums.length; k++) {
        let complement = -(nums[i] + nums[j] + nums[k]);
        if (seen.has(complement)) {
          let temp = [nums[i], nums[j], nums[k], complement];
          temp.sort((a, b) => a - b);
          uniqueQuadruplets.add(JSON.stringify(temp));
        } else {
          seen.add(nums[k]);
        }
      }
    }
  }
  return Array.from(uniqueQuadruplets).map((quadruplet) =>
    JSON.parse(quadruplet),
  );
}

function fourSumOptimal(nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === 0) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (nums[left] === nums[left - 1] && left < right) left++;
          while (nums[right] === nums[right + 1] && left < right) right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return ans;
}

//Example usage:
const arr = [1, 0, -1, 0, -2, 2];
console.log(fourSumOptimal(arr)); // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
