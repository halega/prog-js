// isInteger returns true if n is integer, otherwise returns false.
function isInteger(n) {
    return n*10%10 == 0
}

// Recursive function isEven returns true if a number is even,
// otherwise returns false. It returns undefined for negative and
// floating-point numbers.
function isEven(n) {
    // Assert: n is a non-negative integer.
    if (n < 0 || !isInteger(n)) {
        return undefined;
    }

    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
}

// Tests: isInteger
console.time("test isInteger");
function testIsInteger(n, expected) {
    actual = isInteger(n)
    if (actual != expected) {
        console.log(`Test failed: isInteger(${n}) got ${actual}; want ${expected}.`);
    }
}

testIsInteger(0, true);
testIsInteger(1, true);
testIsInteger(2, true)
testIsInteger(-1, true);
testIsInteger(-2, true);
testIsInteger(0.1, false);
testIsInteger(-0.1, false);
testIsInteger(20.03, false);
testIsInteger(2.3, false);
console.timeEnd("test isInteger");

// Tests: isEven
console.time("test isEven");
function testIsEven(n, expected) {
    actual = isEven(n)
    if (actual != expected) {
        console.log(`Test failed: isEven(${n}) got ${actual}; want ${expected}`);
    }
}

testIsEven(0, true);
testIsEven(1, false);
testIsEven(2, true);
testIsEven(3, false);
testIsEven(10, true);
testIsEven(21, false);
testIsEven(-1, undefined);
testIsEven(1.1, undefined);
testIsEven(20.03, undefined);
testIsEven(10000, true);
testIsEven(10013, false);
console.timeEnd("test isEven");