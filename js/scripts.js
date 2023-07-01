// Business Logic

function beepBoop(number) {
  let numberArray = [];
  for (let i = 0; i <= number; i++) {
    let numberString = i.toString();
    if (numberString.indexOf("3") > -1) {
      numberArray.push("Won't you be my neighbor?");
    } else if (numberString.indexOf("2") > -1) {
      numberArray.push("Boop!");
    } else if (numberString.indexOf("1") > -1) {
      numberArray.push("Beep!");
    } else {
      numberArray.push(i);
    }
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