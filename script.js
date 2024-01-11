let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");
 let Chars
//funtion to calculatte based on button that is clicked
let calculate = (btnValue) => {
  comsole.log(btnValue);
};

//console.log(display, buttons);

//Event Listener for buttons , call calculate() on click.

buttons.forEach((button) => {
  button.addEventListener("click", (e) => console.lof(e.target.dataset.value));
});
