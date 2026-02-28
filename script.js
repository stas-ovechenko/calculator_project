const buttonNumber = document.querySelectorAll(".btn_number");
const inputFirstNumber = document.getElementById("input_first_number");
const inputSecondNumber = document.getElementById("input_second_number");
let state = "first";
let blockOperation = false;

buttonNumber.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (state === "first") {
            inputFirstNumber.textContent += btn.textContent;
            result.textContent = "";
        } else {
            inputSecondNumber.textContent += btn.textContent;
            blockOperation = true;
        };
    });
});

document.getElementById("btn_point").addEventListener("click", () => {
    if (state === "first") {
        if (inputFirstNumber.textContent !== "" && !inputFirstNumber.textContent.includes(".")) {
            inputFirstNumber.textContent += ".";
        }
    } else if (state === "second") {
        if (inputSecondNumber.textContent !== "" && !inputSecondNumber.textContent.includes(".")) {
            inputSecondNumber.textContent += ".";
        }
    }
});

const buttonOperation = document.querySelectorAll(".btn_operation");   
const inputOperation = document.getElementById("input_operation");

buttonOperation.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (inputFirstNumber.textContent === "" || blockOperation) {
            return;
        };
        inputOperation.textContent = btn.textContent;
        state = "second";
    });
});

document.getElementById("btn_clear").addEventListener("click", function() {
    inputFirstNumber.textContent = "";
    inputSecondNumber.textContent = "";
    inputOperation.textContent = "";
    result.textContent = "";
    state = "first";
    blockOperation = false;
});

document.getElementById("btn_clear_last").addEventListener("click", function() {
    if (state === "first") {
        result.textContent = "";
        inputFirstNumber.textContent = inputFirstNumber.textContent.slice(0, -1);
    } else {
        if (inputSecondNumber.textContent !== "") {
            inputSecondNumber.textContent = inputSecondNumber.textContent.slice(0, -1);
            if (inputSecondNumber.textContent === "") {
                blockOperation = false;
            };
        } else if (inputSecondNumber.textContent === "") {
            inputOperation.textContent = "";
            state = "first";
        };
    };
});

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
    };

    if (inputOperation.textContent === "/" && Number(inputSecondNumber.textContent) === 0) {
        inputFirstNumber.textContent = "";
        inputSecondNumber.textContent = "";
        inputOperation.textContent = "";
        result.textContent = "You can't divide by 0!";
        result.style.color = "red";
        result.style.fontSize = "20px";
        state = "first";
        blockOperation = false;
        return;
    };

    inputFirstNumber.textContent = result.textContent;
    inputSecondNumber.textContent = "";
    inputOperation.textContent = "";
    result.textContent = "";
    state = "first";
    blockOperation = false;
});

document.getElementById("btn_theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});