// bmi calculator

let userWeight = prompt("Enter the userWeight");
let userHeight = prompt("Enter the userHeigh");

let result = (userHeight * userHeight) / userWeight;

document.write("teh result : " + Math.floor(result));

if (result >= 25) {
  document.write("<h1>Normal<h1>");
} else if (result <= 16) {
  document.write("<h1>Underweight<h1>");
}
