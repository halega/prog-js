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
        return;
    }

    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    }
    return isEven(n - 2);
}

// Alternative version of isEven:
// - using standard Number.isInteger function;
// - using switch statement.
function isEven2(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return;
    }

    switch (n) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return isEven(n - 2);
    }
}

// Tests: isInteger
console.time("test isInteger");
// testFunc1 defines a test for a function with one argument.
function testFunc1(func, funcName) {
    return function(n, expected) {
        actual = func(n);
        if (actual != expected) {
            console.log(`Test failed: ${funcName}(${n}) got ${actual}; want ${expected}`);
        }
    };
}

const testIsInteger = testFunc1(isInteger, "isInteger");
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
let isEvenTestFuncs = [
    testFunc1(isEven, "isEven"),
    testFunc1(isEven2, "isEven2"),
];
for (const test of isEvenTestFuncs) {
    test(0, true);
    test(1, false);
    test(2, true);
    test(3, false);
    test(10, true);
    test(21, false);
    test(-1, undefined);
    test(1.1, undefined);
    test(20.03, undefined);
    test(10000, true);
    test(10013, false);
}
console.timeEnd("test isEven");

let a1 = [1, 2, 3,];
let a2 = [1, 2, 3];
console.log(a1.length == a2.length);

