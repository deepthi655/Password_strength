document.getElementById('password-input').addEventListener('input', function() {
    const password = this.value;
    const strengthIndicator = document.getElementById('strength-indicator');
    const strength = checkPasswordStrength(password);
    updateStrengthIndicator(strengthIndicator, strength);
});

function checkPasswordStrength(password) {
    let strength = 0;
    const criteria = [
        { regex: /.{8,}/, score: 1 }, // Minimum 8 characters
        { regex: /[A-Z]/, score: 1 }, // At least one uppercase letter
        { regex: /[a-z]/, score: 1 }, // At least one lowercase letter
        { regex: /[0-9]/, score: 1 }, // At least one number
        { regex: /[^A-Za-z0-9]/, score: 1 } // At least one special character
    ];

    criteria.forEach(criterion => {
        if (criterion.regex.test(password)) {
            strength += criterion.score;
        }
    });

    return strength;
}

function updateStrengthIndicator(element, strength) {
    element.classList.remove('weak', 'medium', 'strong');

    if (strength <= 2) {
        element.textContent = 'Weak';
        element.classList.add('weak');
    } else if (strength === 3 || strength === 4) {
        element.textContent = 'Medium';
        element.classList.add('medium');
    } else if (strength === 5) {
        element.textContent = 'Strong';
        element.classList.add('strong');
    } else {
        element.textContent = '';
    }
}
