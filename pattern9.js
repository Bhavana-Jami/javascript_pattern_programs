function pattern(n) {
    let p = "";
    for (let row = 1; row <= 2 * n - 1; row++) {
        if (row <= n) {
            for (let col = 1; col <= row; col++) {
                p += col+" ";
            }
        }
        else {
            for (let col = 1; col <= n-(row-n); col++) {
                p += col+" ";
            }
        }
        p += "\n"
    }
    return p;
}

console.log(pattern(7))