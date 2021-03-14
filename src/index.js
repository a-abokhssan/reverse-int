module.exports = function reverse(n) {
    return parseInt(n.toString().split("").reverse().join(""));
};

/* If we need loop

    let reversedNumber = 0;
    let reminder = 0;
    let modulusOfN = n > 0 ? n : -n;

    while (modulusOfN > 0) {
        reminder = modulusOfN % 10;
        reversedNumber = reversedNumber * 10 + reminder;
        modulusOfN = Math.floor(modulusOfN / 10);
    }

    return reversedNumber;
*/
