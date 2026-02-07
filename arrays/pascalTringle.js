/**
 * To find the element at the coordinates (R,C) where R is the row number and C is the Column number, 
 * we can simply simulate the generation of pascal's triangle for R rows. In Pascal’s Triangle, 
 * the element at row R and column C corresponds to the binomial coefficient (r-1)C(c-1). 
 * To calculate this binomial coefficient, 
 * we can simply apply the formula of binomial coefficient i.e. (r-1)!/(c-1)!(r-c)!.
   Instead of computing full factorials 
   (which can overflow and be slow), 
   we can multiply and divide in a loop to compute the coefficient efficiently.
 * 
 * 
 */

function binomialCoefficient(n, k) {
  let result = 1;
  for (let i = 0; i < k; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }
  return result;
}

function getPascalTriangleElement(R, C) {
  return binomialCoefficient(R - 1, C - 1);
}

// Example usage:
const R = 5;
const C = 3;
console.log(getPascalTriangleElement(R, C)); // Output: 6

//To print the Nth row of the pascal triangle we can take advantage of the relationship between Nth element and binomial coefficients.

//Brute Force Approach - O(N^2) time complexity
function getPascalTriangleRowBruteForce(N) {
  const row = [];
  for (let i = 0; i < N; i++) {
    row.push(binomialCoefficient(N - 1, i));
  }
  return row;
}

//Optimal Approach - O(N) time complexity
function getPascalTriangleRowOptimal(N) {
  const row = [1];
  let value = 1; // First element is always 1
  for (let i = 1; i < N; i++) {
    value = (value * (N - i)) / i;
    row.push(value);
  }
  return row;
}

// Example usage:
const N = 6;
console.log(getPascalTriangleRowOptimal(N)); // Output: [1, 4, 6, 4, 1]

//Print pascal triangle up to N rows

//Brute Force Approach - O(N^3) time complexity
function printPascalTriangleBruteForce(N) {
  const result = [];

  for (let i = 1; i <= N; i++) {
    const row = [];
    for (let j = 1; j <= i; j++) {
      row.push(binomialCoefficient(i - 1, j - 1));
    }
    result.push(row);
  }
  return result;
}

//Optimal Approach - O(N^2) time complexity
function printPascalTriangleOptimal(N) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    result.push(getPascalTriangleRowOptimal(i));
  }
  return result;
}

// Example usage:
const numRows = 6;
console.log(printPascalTriangleBruteForce(numRows));
console.log(printPascalTriangleOptimal(numRows));
