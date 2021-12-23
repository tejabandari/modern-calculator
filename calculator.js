export default class Calculator {
  constructor(primaryOperand, secondaryOperand, operator) {
    this.primaryOperand = primaryOperand;
    this.secondaryOperand = secondaryOperand;
    this.operator = operator;
  }
  addNumber(number) {
    if (number == ".") {
      console.log(number);
      const numbers = this.primaryOperand.textContent.split("");
      const checkAlredyExists = numbers.some((number) => number == ".");
      if (checkAlredyExists) return;
    }
    if (this.primaryOperand.textContent == "0") {
      this.primaryOperand.textContent = number;
    } else {
      this.primaryOperand.textContent += number;
    }
  }
  addOperator(operation) {
    if (this.primaryOperand.textContent == "0") return;
    if (this.secondaryOperand.textContent == "") {
      this.secondaryOperand.textContent = this.primaryOperand.textContent;
      this.primaryOperand.textContent = 0;
      this.operator.textContent = operation;
      console.log(
        this.secondaryOperand.textContent,

        this.primaryOperand.textContent
      );
    }
  }
  equals() {
    const operation = this.operator.textContent;
    let result;
    const num2 = this.primaryOperand.textContent;
    const num1 = this.secondaryOperand.textContent;
    if (!num1 || !num2) return;
    switch (operation) {
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "÷":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
    }
    this.clear();
    this.primaryOperand.textContent = result;
  }
  deleteNumber() {
    const numbers = this.primaryOperand.textContent.split("");
    if (numbers.length === 1) {
      this.primaryOperand.textContent = 0;
      return;
    }
    numbers.pop();
    const final_string = "".concat(...numbers);
    this.primaryOperand.textContent = final_string;
  }
  clear() {
    this.primaryOperand.textContent = 0;
    this.secondaryOperand.textContent = null;
    this.operator.textContent = null;
  }
}
