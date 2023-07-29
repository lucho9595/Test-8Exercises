function validarPassword(password) {
    // Debe tener al menos 16 caracteres
    if (password.length < 16) {
      alert("El password debe tener al menos 16 caracteres");
      return;
    }
  
    // Debe tener letras minúsculas y mayúsculas
    let hasLowercase = false;
    let hasUppercase = false;
    for (const char of password) {
      if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      } else if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      }
    }
    if (!hasLowercase || !hasUppercase) {
      alert("El password debe tener letras minúsculas y mayúsculas");
      return;
    }
  
    // No puede tener 2 letras iguales consecutivas
    for (let i = 1; i < password.length; i++) {
      if (password[i] === password[i - 1]) {
        alert("El password no puede tener 2 letras iguales consecutivas");
        return;
      }
    }
  
    // Debe contener al menos 4 números y no puede tener 2 números iguales consecutivos
    let digitCount = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= '0' && password[i] <= '9') {
        digitCount++;
        if (i > 0 && password[i] === password[i - 1]) {
          alert("El password no puede tener 2 números iguales consecutivos");
          return;
        }
      }
    }
    if (digitCount < 4) {
      alert("El password debe contener al menos 4 números");
      return;
    }
  
    // Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos
    const specialCharacters = new Set("!@#$%^&*-_+=?");
    let specialCharCount = 0;
    for (let i = 0; i < password.length; i++) {
      if (specialCharacters.has(password[i])) {
        specialCharCount++;
        if (i < password.length - 1 && specialCharacters.has(password[i + 1])) {
          alert("Los caracteres especiales no pueden estar juntos");
          return;
        }
        if (i > 0 && specialCharacters.has(password[i - 1])) {
          alert("Los caracteres especiales no pueden repetirse en ninguna posición");
          return;
        }
      }
    }
    if (specialCharCount < 2) {
      alert("El password debe tener al menos 2 caracteres especiales");
      return;
    }
  
    // No se puede usar el número 0
    for (const char of password) {
      if (char === '0') {
        alert("El password no puede contener el número 0");
        return;
      }
    }
  
    // No se puede colocar espacios
    for (const char of password) {
      if (char === ' ') {
        alert("El password no puede contener espacios");
        return;
      }
    }
  
    // Si cumple con todas las validaciones, entonces el password es seguro
    alert("El password es seguro!");
  }
  