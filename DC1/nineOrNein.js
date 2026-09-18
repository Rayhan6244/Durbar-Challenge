function checkMathOperationsForNine(a, b) {
    if (a + b === 9 || a - b === 9 || a * b === 9 || a / b === 9) {
        return "Nine";
    }
    return "Nein";
}
