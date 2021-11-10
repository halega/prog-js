const square = function(x) {
    return x * x;
};

console.log(square(12));

const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));

// access outer scope variable
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
hummus(2);

// assing a new value to a function binding
let launchMissiles = function() {
    missileSystem.launch("now");
};

let safeMode = true;
if (safeMode) {
    launchMissiles = function() { /* do nothing */ };
}
launchMissiles();

// function declaration
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

// arrow functions
const powerArrow = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(powerArrow(2, 10));

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
const horn = () => {
    console.log("Toot");
}
