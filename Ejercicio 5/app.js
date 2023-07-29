function validarPassword(password) {
    const conditionsList = document.getElementById('password-conditions').getElementsByTagName('li');
    // Debe tener al menos 16 caracteres
    const conditionLength = conditionsList[0];
    if (password.length >= 16) {
        conditionLength.classList.remove('invalid');
        conditionLength.classList.add('valid');
    } else {
        conditionLength.classList.remove('valid');
        conditionLength.classList.add('invalid');
    }

    // Debe tener letras minúsculas y mayúsculas
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const conditionLetters = conditionsList[1];
    if (hasLowercase && hasUppercase) {
        conditionLetters.classList.remove('invalid');
        conditionLetters.classList.add('valid');
    } else {
        conditionLetters.classList.remove('valid');
        conditionLetters.classList.add('invalid');
    }

    // No puede tener 2 letras iguales consecutivas
    const hasConsecutiveLetters = /(.)\1/.test(password);
    const conditionConsecutiveLetters = conditionsList[2];
    if (!hasConsecutiveLetters) {
        conditionConsecutiveLetters.classList.remove('invalid');
        conditionConsecutiveLetters.classList.add('valid');
    } else {
        conditionConsecutiveLetters.classList.remove('valid');
        conditionConsecutiveLetters.classList.add('invalid');
    }

    // Debe contener al menos 4 números y no puede tener 2 números iguales consecutivos
    const hasDigits = /\d/.test(password);
    const hasConsecutiveDigits = /(\d)\1/.test(password);
    const conditionDigits = conditionsList[3];
    if (hasDigits && !hasConsecutiveDigits) {
        conditionDigits.classList.remove('invalid');
        conditionDigits.classList.add('valid');
    } else {
        conditionDigits.classList.remove('valid');
        conditionDigits.classList.add('invalid');
    }

    // Debe tener al menos 2 caracteres especiales
    const conditionSpecialChars = conditionsList[4];
    if ((password.match(/[!@#$%^&*-_+=?]/g) || []).length >= 2) {
        conditionSpecialChars.classList.remove('invalid');
        conditionSpecialChars.classList.add('valid');
    } else {
        conditionSpecialChars.classList.remove('valid');
        conditionSpecialChars.classList.add('invalid');
    }

    // No se puede usar el número 0
    const hasZero = /0/.test(password);
    const conditionZero = conditionsList[5];
    if (!hasZero) {
        conditionZero.classList.remove('invalid');
        conditionZero.classList.add('valid');
    } else {
        conditionZero.classList.remove('valid');
        conditionZero.classList.add('invalid');
    }

    // No se puede colocar espacios
    const hasSpaces = /\s/.test(password);
    const conditionSpaces = conditionsList[6];
    if (!hasSpaces) {
        conditionSpaces.classList.remove('invalid');
        conditionSpaces.classList.add('valid');
    } else {
        conditionSpaces.classList.remove('valid');
        conditionSpaces.classList.add('invalid');
    }

    console.log(password)
}
