let firstNumber;
let operand;
let secondNumber;
let btnNum = 1

function add(num1, num2){
    return +num1 + +num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return null;
    }
}

const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'Clear', '=', '+'
];

const container = document.querySelector('.buttons');
buttonValues.forEach(value => {
    const button = document.createElement('button');
    button.textContent = value;
    button.classList.add('button');
    container.appendChild(button);
    button.addEventListener('click', () => handleButtonClick(value));
});


// let num1 = prompt('Enter first number:');
// let num2 = prompt('Enter second number:');
// const container = document.querySelector('.buttons')

// for (let i = 0; i < 16; i++) {
//     const buttons = document.createElement('button')
//     buttons.classList.add('button'+btnNum)
//     container.appendChild(buttons)
//     btnNum++
// }



