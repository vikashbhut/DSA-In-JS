function palindrom(n) {
  let reverse = 0;
  let x = n;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  console.log(reverse == n);
}

palindrom(121);
