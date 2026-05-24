const prompt = require("prompt-sync")({ sigint: true });
const tableOf = prompt("Enter the number to Calculate Table: ");
const tableUpto = prompt("Enter the limit of Table: ");
// console.log(table * 1);
// console.log(table * 2);
// console.log(table * 3);
// console.log(table * 4);
// console.log(table * 5);
// console.log(table * 6);
// console.log(table * 7);
// console.log(table * 8);
// console.log(table * 9);
// console.log(table * 10);
for (let i = 1; i <= tableUpto; i++) {
  console.log(tableOf * i);
}
