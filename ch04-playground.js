var fs = require("fs");

fs.stat("ch04-playground.js", (error, stats) => {
	if (error) {
		console.log(error);
	} else {
		console.log(stats);
		console.log("Path is file:", stats.isFile());
		console.log("Path is directory:", stats.isDirectory());
	}
});

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2]);

function numberToString(n, base = 10) {
	let result = "", sign = "";
	if (n < 0) {
		sign = "-";
		n = -n;
	}
	do {
		result = String(n % base) + result;
		n = Math.floor(n / base);
	} while (n > 0);
	return sign + result;
}

console.log(numberToString(141));
