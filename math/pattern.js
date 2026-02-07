// Input Format: N = 3
// Result:
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

function pattern(n) {
  let str = "";
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i;
      let left = j;
      let right = 2 * n - 2 - j;
      let bottom = 2 * n - 2 - i;
      str += `${n - Math.min(...[top, left, right, bottom])}`;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(3);
