// approach 1: calculator simpple
    // const Integer = document.getElementById("Integer");
    // const operator = document.getElementById("operator");
    // const btn = document.getElementById("btn");
    // const result = document.getElementById("result");

    // function Calculator() {
    //     const a = parseFloat(Integer.value);
    //     const op = operator.value.trim();
    //     const b = parseFloat(prompt("Enter second number:"));

    //     if (isNaN(a) || isNaN(b)) {
    //         alert("Please enter valid numbers.");
    //         return;
    //     }

    //     let output;

    //     switch (op) {
    //         case "+":
    //             output = a + b;
    //             break;
    //         case "-":
    //             output = a - b;
    //             break;
    //         case "*":
    //             output = a * b;
    //             break;
    //         case "/":
    //             output = b !== 0 ? a / b : "Cannot divide by 0";
    //             break;
    //         default:
    //             output = "Invalid operator!";
    //     }

    //     result.textContent = `Result: ${output}`;
    // }

    // btn.addEventListener("click", Calculator);









// approach 2: calculate through symbols(- , + , * , /) from keyboard

const Integer = document.getElementById("Integer");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function Calculator() {
    const input = Integer.value.trim();
    const operators = ['+', '-', '*', '/'];
    let operatorFound = null;
    
    // Find which operator is in the input
    for (let op of operators) {
        if (input.includes(op)) {
            operatorFound = op;
            break;
        }
    }
    
    // If no operator found
    if (!operatorFound) {
        result.textContent = "Please enter a valid expression (e.g. 5+5)";
        result.style.color = "red";
        return;
    }
    
    // Split the input into two parts
    const parts = input.split(operatorFound);
    
    // Check if we have exactly two numbers
    if (parts.length !== 2) {
        result.textContent = "Please enter exactly two numbers with one operator";
        result.style.color = "red";
        return;
    }
    
    const a = parseFloat(parts[0]);
    const b = parseFloat(parts[1]);
    
    // Validate numbers
    if (isNaN(a) || isNaN(b)) {
        result.textContent = "Please enter valid numbers";
        result.style.color = "red";
        return;
    }
    
    // Perform calculation
    let calculation;
    let error = false;
    
    switch (operatorFound) {
        case '+':
            calculation = a + b;
            break;
        case '-':
            calculation = a - b;
            break;
        case '*':
            calculation = a * b;
            break;
        case '/':
            if (b === 0) {
                result.textContent = "Cannot divide by zero";
                result.style.color = "red";
                error = true;
            } else {
                calculation = a / b;
            }
            break;
        default:
            result.textContent = "Invalid operator";
            result.style.color = "red";
            error = true;
    }
    
    // Display result if no error
    if (!error) {
        result.textContent = `Result: ${a} ${operatorFound} ${b} = ${calculation}`;
        result.style.color = "green";
    }
}

// Event listeners
btn.addEventListener("click", Calculator);

Integer.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        Calculator();
    }
});

// Clear error when user starts typing
Integer.addEventListener("input", function() {
    result.textContent = "";
});

console.log("Calculator is ready to use");