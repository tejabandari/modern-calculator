import Calculator from "./calculator.js";

const primaryOperand = document.querySelector(".primary-operand");
const secondaryOperand = document.querySelector(".secondary-operand");
const operator = document.querySelector(".operator");

const calculator = new Calculator(primaryOperand, secondaryOperand, operator);
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-all-clear]")) {
    calculator.clear();
  }
  if (e.target.matches("[data-delete]")) {
    calculator.deleteNumber();
  }
  if (e.target.matches("[data-operation]")) {
    calculator.addOperator(e.target.textContent);
  }
  if (e.target.matches("[data-number]")) {
    calculator.addNumber(e.target.textContent);
  }
  if (e.target.matches("[data-equals]")) {
    calculator.equals();
  }
});
