import Calculator from "./calculator.js"

const numberBtn = document.querySelectorAll("[data-number]");
const opertationBtn = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equal]")
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const preNumb = document.querySelector("[data-previous-operand]");
const currentNumb = document.querySelector("[data-current-operand]");

const calc = new Calculator (preNumb, currentNumb);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calc.displayNumb(button.innerText);
        calc.updateDisplay();
    })
});

opertationBtn.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle("active");
        calc.displayOperation(button.innerText);
        calc.displayNumb();
    })
});

equalBtn.addEventListener('click', () => {
    calc.compute();
    calc.updateDisplay()
});

allClearBtn.addEventListener('click', () => {
    calc.clear();
    calc.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
    calc.delete();
    calc.updateDisplay();
})