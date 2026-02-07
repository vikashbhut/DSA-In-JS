/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aLength = a.length;
  let bLength = b.length;

  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");

  let ans = "";
  let carry = "0";

  for (let i = 0; i < Math.max(aLength, bLength); i++) {
    let charA = i < aLength ? a[i] : "0";
    let charB = i < bLength ? b[i] : "0";

    let sum = parseInt(charA) + parseInt(charB) + parseInt(carry);
    if (sum == 0 || sum == 2) ans += "0";
    else ans += "1";

    if (sum > 1) carry = "1";
    else carry = "0";
  }
  if (carry == "1") {
    ans += "1";
  }
  return ans.split("").reverse().join("");
};

console.log(addBinary("1111", "1111"));
