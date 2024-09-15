function pattern(n) {
    let p = "";
    let spaceMax = 1;
    let starMax = 1;
    for (let row = 1; row <= 2 * n - 1; row++) {
        if (row <= n) {
            spaceMax = n - row;
            starMax = 2 * row - 1
        }
        else {
            spaceMax = row - n
            starMax = 2 * n - (2 * row - 2 * n + 1);
        }
        for (let space = 1; space <= spaceMax; space++) {
            p += " ";
        }
        for (let star = 1; star <= starMax; star++) {
            p += "*" + " "
        }

        p += "\n"
    }
    return p;
}

console.log(pattern(5))