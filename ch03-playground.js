// Function declaration scope

let firstName = "Stas";

printName();

// Function declarations are conceptually moved to the top of their scope
// and can be used by all the code in that scope.
function printName() {
    console.log(getName());
}

function getName() {
    return firstName;
}

// Closure examples.

function wrapValue(n) {
    return () => n++;
}

let wrap = wrapValue(2);

for (let i = 0; i < 10; i++) {
    console.log(wrap());
}

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log("Twice:", twice(7));

// Recursion example.
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log("power(2, 3) =", power(2, 3));