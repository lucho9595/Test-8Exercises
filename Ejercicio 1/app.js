function multiplicacionSinMultiplicar(x, y) {
    const multiplicador = Math.abs(y);
    const multiplicando = Math.abs(x);
    let resultado = 0;

    for (let i = 0; i < multiplicador; i++) {
      resultado += multiplicando;
    }

    return (x < 0) !== (y < 0) ? -resultado : resultado;
  }

  function calcularMultiplicacion() {
    const numero1 = parseInt(document.getElementById('numero1').value, 10);
    const numero2 = parseInt(document.getElementById('numero2').value, 10);

    if (isNaN(numero1) || isNaN(numero2)) {
      document.getElementById('resultado').textContent = 'Por favor, ingresa dos números válidos.';
    } else {
      const resultado = multiplicacionSinMultiplicar(numero1, numero2);
      document.getElementById('resultado').textContent = `El resultado de la multiplicación es: ${resultado}`;
    }
  }
