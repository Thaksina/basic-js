// #1 Way to copy array : Using slice
const color = ["black","blue","green"];
const colorcopy1 = color.slice();

// #2 Way to capy array 
const colorcopy2 = [...color];

// The result
console.log(color);
console.log(colorcopy1);
console.log(colorcopy2);