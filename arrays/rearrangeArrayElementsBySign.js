/**
 * Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions
 */

function brute(arr) {
  let pos = [];
  let neg = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg.push(arr[i]);
    } else {
      pos.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    arr[i * 2] = pos[i];
    arr[i * 2 + 1] = neg[i];
  }

  console.log(arr);
}

function optimal(arr) {
  let ans = [];
  let pos = 0;
  let neg = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      ans[neg] = arr[i];
      neg += 2;
    } else {
      ans[pos] = arr[i];
      pos += 2;
    }
  }
  console.log(ans);
}
//If positive and negative not equal then fall back to brute force [-1,2,3,4,-3,1]
function bruteTwo(arr) {
  let pos = [];
  let neg = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) neg.push(arr[i]);
    else pos.push(arr[i]);
  }

  let min = Math.min(pos.length, neg.length);

  for (let i = 0; i < min; i++) {
    arr[2 * i] = pos[i];
    arr[2 * i + 1] = neg[i];
  }

  let index = min * 2;

  console.log(pos.length, neg.length, index, min);

  if (pos.length > neg.length) {
    for (let i = min; i < pos.length; i++) {
      arr[index] = pos[i];
      index++;
    }
  } else {
    for (let i = min; i < neg.length; i++) {
      arr[index] = neg[i];
      index++;
    }
  }
  console.log(arr);
}

bruteTwo([-1, 2, 3, -4, 3, 1]);
