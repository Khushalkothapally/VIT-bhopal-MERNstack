let expression = "";

const screen = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    const value = btn.getAttribute("data-val");

    if (value) {
        btn.addEventListener("click", () => {
            expression += value;
            screen.value = expression;
        });
    }
});

document.getElementById("equals").addEventListener("click", () => {
    if (expression.trim() === "") return;

    try {
        const answer = eval(expression);
        screen.value = answer;
        expression = String(answer);
    } catch (err) {
        screen.value = "Error";
        expression = "";
    }
});

document.getElementById("clear").addEventListener("click", () => {
    expression = "";
    screen.value = "";
});
