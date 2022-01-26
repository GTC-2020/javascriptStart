function calc(operation, a, b){
    let isInputValid = (operation !== undefined && typeof(a) === 'number' && typeof(b) === 'number');
    let operations = {
        "sum": a + b,
        "multi": a * b,
        "div": a / b,
        "sub":a - b,
        "rem":a % b,
        "deg": a ** b,
    }
    let exitOperation = [operation] in operations;

    if(isInputValid){
        if(exitOperation){
            return operations[operation];
        }
        return "Unknown operation"
    }
    return "Error";

}

console.log(calc("summ", 20, 5));
console.log(calc("deg", 2, 3));
console.log(calc("sum", "a", 8));