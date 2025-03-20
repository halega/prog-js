// countChar counts the number of the chararcter in a str.
function countChar(str, ch) {
    let count = 0;
    for (c of str) {
        if (c == ch) {
            count++;
        }
    }
    return count;
}

// countBs counts the number of upper-case B letters in a str.
const countBs = str => countChar(str, "B");

// Tests: countBs
function testCountBs(str, expectedCount) {
    actualCount = countBs(str)
    if (actualCount != expectedCount) {
        console.log(`Test countBs(${str}) failed: got ${actualCount}; want ${expectedCount}`)
    }
}

testCountBs("", 0);
testCountBs(" ", 0);
testCountBs("abc", 0);
testCountBs("AbC", 0);
testCountBs("B", 1);
testCountBs(" B ", 1);
testCountBs("aBc", 1);
testCountBs("BbBBbB", 4);
testCountBs("Русское В", 0);
console.log("Tests completed.")