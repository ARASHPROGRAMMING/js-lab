function addToMiddle(array, value) {
  if (array.length % 2 === 0) {
    const middleIndex = array.length / 2;
    const newArray = [];

    for (let i = 0; i < middleIndex; i++) {
      newArray[i] = array[i];
    }

    newArray[middleIndex] = value;

    for (let i = middleIndex + 1; i <= array.length; i++) {
      newArray[i] = array[i - 1];
    }

    return newArray;
  } else {
    console.log("طول آرایه فرد است، مقدار به وسط اضافه نمی‌شود.");
    return array;
  }
}

const myArray = ["benz", "pride", "porche", "bmw"];
const valueToAdd = 5;
const newArray = addToMiddle(myArray, valueToAdd);

console.log(newArray);
