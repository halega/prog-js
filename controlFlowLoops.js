let number = 0;
while (number <= 12) {
    console.log(number);
    number += 2;
}

// calc 2^10
let result = 1;
let counter = 0;
while (counter < 10) {
    result *= 2;
    counter++;
}
console.log(result, counter);

function askName() {
    let yourName;
    do {
        yourName = prompt("Who are you?");
    } while (!yourName)
    return yourName;
}

// console.log(askName());