const num = Math.floor(Math.random() * 100) + 1;
console.log("num = %d", num);
if (num < 10) {
    console.log("Small");
} else if (num < 50) {
    console.log("Medium");
} else {
    console.log("Large");
}