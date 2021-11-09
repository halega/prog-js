// First try
for (let i = 0; i < 7; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += "#"
    }
    console.log(str);
}

// Second try
for (let str = "#"; str.length <= 7; str += "#") {
    console.log(str);
}
