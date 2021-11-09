for (let i = 0; i <= 12; i += 2) {
    console.log(i);
}
// console.log(i); // i is not defined

let result = 1;
for (let i = 0; i < 10; i++) {
    result *= 2;
}
console.log(result);

for (let current = 20; ; current++) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
