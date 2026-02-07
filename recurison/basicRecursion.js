function printNTimesNames(i, n) {
  if (i > n) return;
  console.log("Vikas");
  printNTimesNames(++i, n);
}

//Backtrack approach 1,2,3...4
function print1toN(i, n) {
  if (i < 1) return;
  print1toN(i - 1, n);
  console.log(i);
}
//print1toN(4,4)

//Backtrack approach
function printNto1Reverse(i, n) {
  if (i > n) return;
  printNto1Reverse(i + 1, n);
  console.log(i);
}

//printNto1Reverse(1,4)

//Parameterized approach
function sumNnumber(i, sum = 0) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  sumNnumber(i - 1, sum + i);
}

//Functional Approach
function sumNnumberFunctionalApproach(i) {
  if (i == 0) {
    return 0;
  } else {
    return i + sumNnumberFunctionalApproach(i - 1);
  }
}

//Factorial

function factorial(n) {
  if (n == 0 || n == 1) return n;
  else return n * factorial(n - 1);
}

//Reverse an array
function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

//Two Pointer
function reverseArray(arr, start, end) {
  if (start >= end) {
    console.log(arr);
    return;
  }
  swap(arr, start, end);
  reverseArray(arr, start + 1, end - 1);
}

function reverseArraySinglePointer(arr, index) {
  if (index >= arr.length / 2) {
    console.log(arr);
    return;
  }
  swap(arr, index, arr.length - index - 1);
  reverseArraySinglePointer(arr, index + 1);
}

function isPalindromString(index = 0, str) {
  if (index >= str.length / 2) return true;
  if (str[index] !== str[str.length - index - 1]) return false;
  else return isPalindromString(index + 1, str);
}

function fibonacci(n) {
  let fib = [];
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return "0,1";
  }
  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib.join(","));
}

function fibonacciTwoPointer(n) {
  if (n == 0) return 0;
  if (n >= 1) {
    console.log(0);
    console.log(1);
  }
  let first = 0;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    let next = first + second;
    console.log(next);
    first = second;
    second = next;
  }
}

function fibonacciRecursive(n) {
  if (n == 0 || n == 1) return n;
  else {
    let last = fibonacciRecursive(n - 1);
    let secondLast = fibonacciRecursive(n - 2);
    return last + secondLast;
  }
}
