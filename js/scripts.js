// Business Logic

function beepBoop(number) {
  let numberArray = [];
  for (let i = 0; i <= number; i++) {
    let string = i.toString();
    let numberString = "";
    for (let x = 0; x < string.length; x++) {
      if (string[x] === "1") {
        numberString += "Beep!";
      } else if (string[x] === "2") {
        numberString += "Boop!";
      } else if (string[x] === "3") {
        numberString += "Won't you be my neighbor?";
      } else {
        numberString += string[x];
      }
    }
    numberArray.push(numberString);
  }
  return numberArray;
}

// UI Logic

window.onload = function () {
  const form = document.querySelector("form");

  document.getElementById("resetFormButton").addEventListener("click", (event) => {
    form.reset();
    document.getElementById("converted-text").innerText = "";
  })
  
  form.onsubmit = function (event) {
    event.preventDefault();
    document.getElementById("converted-text").innerText = "";
    const number = parseInt(document.getElementById("userNumber").value);
    const list = beepBoop(number);
    document.getElementById("converted-text").innerText = list;
  }
  form.reset();
};

//console.log(list);