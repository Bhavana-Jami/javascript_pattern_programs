function pattern(n) {
  let p = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      p += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j == 0 || j == 2 * i || i == 0 || i == n - 1) {
        p += "*";
      } else {
        p += " ";
      }
    }
    p += "\n";
  }
  return p;
}

console.log(pattern(4));
