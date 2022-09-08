var screenEl = document.getElementById("screen"), buttons = document.querySelectorAll("button");
var sum = function (x, y) { return x + y; }, sub = function (x, y) { return x - y; }, mul = function (x, y) { return x * y; }, div = function (x, y) { return x / y; };
var expr = "";
function calculate() {
    var nums = expr.split(/\D/), oper = expr.split(/\d/);
    oper = oper.filter(function (op) { return op !== ""; });
    if (oper.length > 1) {
        return "Invalid Expression";
    }
    var total = nums.reduce(function (a, b) {
        if (oper[0] === "+") {
            return sum(Number(a), Number(b)).toString();
        }
        else if (oper[0] === "-") {
            return sub(Number(a), Number(b)).toString();
        }
        else if (oper[0] === "×") {
            return mul(Number(a), Number(b)).toString();
        }
        else if (oper[0] === "÷") {
            return div(Number(a), Number(b)).toString();
        }
        else {
            return "Invalid Operator";
        }
    });
    return total;
}
function handleClick() {
    if (this.id === "equalBtn") {
        expr = calculate();
        if (expr === undefined) {
            expr = "Error";
        }
        screenEl.textContent = expr;
    }
    else if (this.id === "clearBtn") {
        screenEl.textContent = "0";
        expr = "";
    }
    else {
        expr += this.textContent;
        screenEl.textContent = expr;
    }
}
buttons.forEach(function (btn) {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleClick);
});
