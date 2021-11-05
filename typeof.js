// Types
console.log('Types:');
console.log(13);
console.log(2.9);
console.log(2.998e8);

// typeof
console.log("\ntypeof:");
console.log(typeof 1.1);
console.log(typeof 'a');
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof 0/0);
console.log(typeof NaN);
console.log(typeof []);

// examples of template literal
console.log("\nTemplate literal:");
let a = "a";
console.log(`a = "${a}"`);
const num = 16;
console.log(`Count: ${num}!` === 'Count: 16!');
const str = `this is
a text with
multiple lines`;
console.log(str);