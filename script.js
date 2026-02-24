// Введення чисел
const buttonNumber = document.querySelectorAll(".btn_number");
const inputFirstNumber = document.getElementById("input_first_number");
const inputSecondNumber = document.getElementById("input_second_number");
// стан числа
let state = "first";
// блок операції після другого числа
let blockOperation = false;

buttonNumber.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // введення першого числа
        if (state === "first") {
            inputFirstNumber.textContent += btn.textContent;
            result.textContent = "";
        } else {
            inputSecondNumber.textContent += btn.textContent;
            blockOperation = true;
        }
    });
});

// введення операції
const buttonOperation = document.querySelectorAll(".btn_operation");   
const inputOperation = document.getElementById("input_operation");

buttonOperation.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // якщо перше число є задаємо операцію
        if (inputFirstNumber.textContent === "" || blockOperation) {
            return;
        }
        inputOperation.textContent = btn.textContent;
        // зміна стану для введення другого числа
        state = "second";
    });
});

// Clear
document.getElementById("btn_clear").addEventListener("click", function() {
    // чистка полів
    inputFirstNumber.textContent = "";
    inputSecondNumber.textContent = "";
    inputOperation.textContent = "";
    result.textContent = "";
    // скидання стану
    state = "first";
    blockOperation = false;
});

// калькулятор
const result = document.getElementById("input_result");

document.getElementById("btn_result").addEventListener("click",function () {
    let calculator = inputOperation.textContent
    switch (calculator) {
        case '+':
            result.textContent = Number(inputFirstNumber.textContent) + Number(inputSecondNumber.textContent);
            break;
        case '-':
            result.textContent = Number(inputFirstNumber.textContent) - Number(inputSecondNumber.textContent);
            break;
        case '/':
            result.textContent = Number(inputFirstNumber.textContent) / Number(inputSecondNumber.textContent);
            break;
        case '*':
            result.textContent = Number(inputFirstNumber.textContent) * Number(inputSecondNumber.textContent);
            break;
    }
    // після result очищаємо поля
    inputFirstNumber.textContent = "";
    inputSecondNumber.textContent = "";
    inputOperation.textContent = "";
    state = "first";
    blockOperation = false;
});