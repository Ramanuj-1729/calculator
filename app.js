let screen = document.getElementById("screen");
opeButtons = document.querySelectorAll(".ope-btn");
numButtons = document.querySelectorAll(".num-btn");
let result = document.getElementById("result");
let screenValue = "";

for (let item of opeButtons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += ' ' + buttonText + ' ';
            screen.value = screenValue;
        }
        else if (buttonText == 'π') {
            screenValue += 3.1416;
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            result.innerHTML = eval(screenValue);
        }
        else if (buttonText == 'C') {
            screen.value = "0";
            screenValue = "";
            result.innerHTML = "";
        }
        else {
            screenValue += ' ' + buttonText + ' ';
            screen.value = screenValue;
        }
    })
}

for (let item of numButtons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        screenValue += buttonText;
        screen.value = screenValue;
    })
}

function backSpace() {
    if (buttonText == "+" || buttonText == "-" || buttonText == "*" || buttonText == "/") {
        var back_space = document.getElementById("screen").value;
        back_space = back_space.substr(0, back_space.length - 3);
        screen.value = back_space;
        screenValue = back_space;
    }
    else if (screen.value == "0") {
        screen.value = "0";
    }
    else {
        var back_space = document.getElementById("screen").value;
        back_space = back_space.substr(0, back_space.length - 1);
        screen.value = back_space;
        screenValue = back_space;
    }
}