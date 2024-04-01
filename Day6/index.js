let counter = 0;
let counterDiv = document.getElementById("counter");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let btnFunction = btn.textContent;
    console.log(btnFunction)
    switch (btnFunction) {
      case "Decrease":
        counter -= 1;
      break;
      case "Increase":
        counter += 1;
      break;
      default:
        counter = 0;
      break;
    }
    counterDiv.innerHTML = counter;
  })
});