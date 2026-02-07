function charFrequnecy(str, ch) {
  str = str.toLowerCase();
  let hash = new Array(26).fill(0);
  // ch - 97 => ch=a => 97-97 = 0
  for (let i = 0; i < str.length; i++) {
    hash[str.charCodeAt(i) - 97]++;
  }
  return hash[ch.charCodeAt(0) - 97];
}

console.log(charFrequnecy("abcdabehf", "e"));
