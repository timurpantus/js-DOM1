let currentInput = 'number1'; 

function selectInput(inputId) {
    currentInput = inputId;
}

function appendNumber(number) {
    const inputField = document.getElementById(currentInput);
    inputField.value += number;
}

function setOperation(op) {
    operation = op;
}

function calculate() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const resultField = document.getElementById('result');
    
    if (number1 === '' || number2 === '') {
        resultField.textContent = 'Будь ласка, заповніть обидва поля.';
        return;
    }
    
    if (isNaN(number1) || isNaN(number2)) {
        resultField.textContent = 'Будь ласка, введіть коректні числові значення.';
        return;
    }
    
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultField.textContent = 'Помилка: Ділення на нуль!';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultField.textContent = 'Будь ласка, оберіть операцію.';
            return;
    }
    
    resultField.textContent = 'Результат: ' + result.toFixed(2);
}

function clearDisplay() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').textContent = '';
    currentInput = 'number1';
    operation = null;
}

function backspace() {
    const inputField = document.getElementById(currentInput);
    inputField.value = inputField.value.slice(0, -1);
}
