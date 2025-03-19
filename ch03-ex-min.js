// Excercise:
//   Define the function min that takes two
//   arguments and returns their minimum.

// Define usual function.
function min(x, y) {
    return x < y ? x : y;
}

// Define arrow function.
const min2 = (x, y) => {
    if (x < y) {
        return x;
    } else {
        return y;
    }
};

// Define binding with function value.
let min3 = function(x, y) {
    let m = x;
    if (y < x) {
        m = y;
    }
    return m;
};

// Tests: all should print 1.
console.log(min(1, 2));
console.log(min(2, 1));
console.log(min(1, 1));

console.log(min2(1, 2));
console.log(min2(2, 1));
console.log(min2(1, 1));

console.log(min3(1, 2));
console.log(min3(2, 1));
console.log(min3(1, 1));