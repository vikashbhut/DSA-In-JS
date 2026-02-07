var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  const temp = [];

  for (let i = n - k; i < n; i++) {
    temp.push(nums[i]);
  }
  for (let i = n - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = 0; i < k; i++) {
    nums[i] = temp[i];
  }
  console.log(nums);
};

rotate([-1, -100, 3, 99], 2);
rotate([1, 2, 3, 4, 5, 6, 7], 3);
