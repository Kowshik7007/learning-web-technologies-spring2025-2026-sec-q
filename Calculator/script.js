const display = document.getElementById('display');
const container = document.getElementById('buttonContainer');

let num1 = '';
let num2 = '';
let operator = '';

const buttonLabels = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

buttonLabels.forEach(label => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.addEventListener('click', () => handleClick(label));
    container.appendChild(btn);
});

function handleClick(label) {
    if (label === 'C') {
        display.value = '0';
        num1 = '';
        num2 = '';
        operator = '';
    } else if (label === '=') {
        if (num1 && operator && display.value) {
            num2 = display.value;
            const result = calculate(parseFloat(num1), parseFloat(num2), operator);
            display.value = result;
            num1 = result;
            num2 = '';
            operator = '';
        }
    } else if (['+', '-', '*', '/'].includes(label)) {
        num1 = display.value;
        operator = label;
        display.value = '0';
    } else {
        if (display.value === '0') {
            display.value = label;
        } else {
            display.value += label;
        }
    }
}

function calculate(n1, n2, op) {
    switch(op) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n1 / n2;
        default: return n2;
    }
}