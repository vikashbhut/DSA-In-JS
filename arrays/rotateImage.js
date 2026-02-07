// Brute force approach
function rotateImageBrute(matrix) {
  const n = matrix.length;
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }
  return result;
}

//Optimal Approach
function rotateImageOptimal(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}

//Example usage
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotateImageOptimal(matrix)); // Output: [[7,4,1],[8,5,2],[9,6,3]]
