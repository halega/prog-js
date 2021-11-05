1;
!true;

let ten = 10;
console.log(ten * ten); // -> 100

let uninitialized;
console.log(uninitialized); // -> undefined
console.log(uninitialized * ten); // -> NaN
console.log(ten * uninitialized); // -> NaN

console.log(Math.max(2, 4, -1));
console.log(Math.min(2, 4, -1) + 10);

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true