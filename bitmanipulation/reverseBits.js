var reverseBits = function (n) {
  let num = 0;
  for (let i = 0; i <= 31; i++) {
    if (n & (1 << i)) {
      num = num | (1 << (31 - i));
    }
  }
  return num;
};

console.log(reverseBits(3));
