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
