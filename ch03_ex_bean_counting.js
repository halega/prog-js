// countBs counts the number of upper-case B letters in a str.
function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "B") {
            count++;
        }
    }
    return count;
}

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