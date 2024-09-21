function pattern(n) {
  let p = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      p += "* ";
    }
    for (let col = 1; col <= 2 * n - 2 * row + 1; col++) {
      p += " ";
    }
    for (let col = 1; col <= 2 * n - 2 * row + 1; col++) {
      p += " ";
    }
    for (let col = 1; col <= row; col++) {
      if (row == n - 1 && col == 2 * n) {
        p += "*" + "\n";
      }
      p += "* ";
    }
    p += "\n";
  }
  p += "\n";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n - row + 1; col++) {
      p += "* ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      p += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      p += " ";
    }
    for (let col = 1; col <= n - row + 1; col++) {
      p += "* ";
    }
    p += "\n";
  }
  return p;
}
console.log(pattern(5));
