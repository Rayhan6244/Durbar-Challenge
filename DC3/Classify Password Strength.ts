function classifyPassword(password: string): "Weak" | "Medium" | "Strong" {
  // TODO
  const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    const conditionsMet = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;

    if (password.length >= 8 && conditionsMet === 4) {
        return "Strong";
    }

    if (password.length >= 6 && conditionsMet >= 2) {
        return "Medium";
    }

    return "Weak";
}
