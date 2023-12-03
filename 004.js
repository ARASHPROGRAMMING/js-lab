let userNumber1 = Number(prompt("Enter the Number1"))
let userNumber2 = Number(prompt("Enter the Number2"))

function getNumber(num1, num2) {
  let sum = 0;

  for (let i = 1; i < num2; i++) {
    if (i % num1 === 0) {
      sum += i;
      console.log(i);
    }
  }

  return sum;
}

if (userNumber1 < userNumber2) {
    let result = getNumber(userNumber1,userNumber2);
    console.log(result)
} else {
    console.log("The number smaler than Number 2");
}