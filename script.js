function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display').value;

    // Handle square roots
    display = display.replace('sqrt(', 'Math.sqrt(');

    // Handle exponents (e.g., 2^3 to Math.pow(2,3))
    display = display.replace(/\^/g, '**');

    try {
        // Evaluate the expression
        const result = eval(display);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
