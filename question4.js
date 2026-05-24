const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Enter the number: ");
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
