let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".buttons");
let splChars = ["%", "*", "/", "+", "="];
let output = "";

// Function to calculate based on the button that is clicked
let calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "*0.01"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && splChars.includes(btnValue)) return;

    output += btnValue;
  }

  display.value = output;
};

// Event Listener for buttons, call calculate() on click.
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.innerText));
});
