function pattern(n) {
  let p = "";
  let spaceMax = 1;
  let starMax = 1;
  for (let row = 1; row <= 2 * n - 1; row++) {
    if (row <= 5) {
      spaceMax = n - row;
      starMax = row;
    } else {
      spaceMax = row - n;
      starMax = n - (row - n);
    }
    for (let space = 1; space <= spaceMax; space++) {
      p += " ";
    }
    for (let star = 1; star <= starMax; star++) {
      p += "* ";
    }
    p += "\n";
  }
  return p;
}

console.log(pattern(5));
