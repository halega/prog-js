const size = 8;
const s = [" ", "#"];
for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
        line += s[(j + i) % 2];
    }
    console.log(line);
}
