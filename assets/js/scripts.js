function sanitizeInput(input) {
    // Replace any character that is not a number, X, or V (case insensitive)
    input.value = input.value.replace(/[^0-9XxVv]/g, '');
}