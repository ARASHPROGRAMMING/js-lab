// Mazrab adad ghabl az sad vorodi

let userNumber = Number(prompt("Enter the userNumber"));
function get(num) {
  let getNumber = [];

  for (i = 0; i <= 100; i++) {
    if (i % num === 0) {
      getNumber.push(i);
    }
  }
  return getNumber;
}
let result = get(userNumber);
console.log(result);
