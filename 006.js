function randonNumber() {
    let result = "";
    result += Math.floor(Math.random() * 100);
    const random = document.getElementById("random");
    random.textContent = result;
    random.style.textAlign = "center";
    random.style.fontSize = "3.5rem";
    random.style.color = "whitesmoke";
    if (result > 90) {
      document.body.style.backgroundColor = "green";
      return "Good job";
    } else if (result > 60) {
      document.body.style.backgroundColor = "yellow";
      return "Pass";
    } else if (result < 60) {
      document.body.style.backgroundColor = "red";
      return "failed";
    }
  }
  
  function garde() {
    const gardeNumber = document.getElementById("grade");
    gardeNumber.textContent = randonNumber();
    gardeNumber.style.textAlign = "center";
    gardeNumber.style.fontSize = "3.5rem";
    gardeNumber.style.color = "whitesmoke";
  }
  
  garde();
  