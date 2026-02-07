function countDigits(n) {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.trunc(n / 10);
  }
  console.log(count);
}

function countDigitsWithString(n) {
  console.log(String(n).length);
}

function countDigitsWithLog(n) {
  console.log(Math.trunc(Math.log10(n)) + 1);
}

countDigitsWithLog(100);
