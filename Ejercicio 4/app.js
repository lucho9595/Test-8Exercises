function calcularInformacion() {
  const inputNumeros = document.getElementById('inputNumeros');
  const inputText = inputNumeros.value.trim();

  // Validar si el input está vacío o solo contiene letras/caracteres no numéricos
  if (inputText === '' || !/^\d+(,\s*\d+)*$/.test(inputText)) {
    alert('Por favor, ingresa solo números separados por comas.');
    return;
  }

  const arregloNumeros = inputText.split(',').map(num => Number(num.trim()));
  const cantidadElementos = arregloNumeros.length;

  // Cálculo del porcentaje de números pares e impares.
  const numerosPares = arregloNumeros.filter(num => num % 2 === 0);
  const porcentajePares = (numerosPares.length / cantidadElementos) * 100;
  const porcentajeImpares = 100 - porcentajePares;

  // Cálculo del porcentaje de números mayores a 1000.
  const numerosMayores1000 = arregloNumeros.filter(num => num > 1000);
  const porcentajeMayores1000 = (numerosMayores1000.length / cantidadElementos) * 100;

  // Cálculo del mayor y menor valor.
  const mayorValor = Math.max(...arregloNumeros);
  const menorValor = Math.min(...arregloNumeros);

  // Cálculo del porcentaje del número mínimo y el promedio de todos los números.
  const porcentajeNumeroMinimo = (menorValor / mayorValor) * 100;
  const sumaTotal = arregloNumeros.reduce((acc, num) => acc + num, 0);
  const promedioNumeros = sumaTotal / cantidadElementos;

  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = `
    <p>Cantidad de elementos: ${cantidadElementos}</p>
    <p>Porcentaje de números pares: ${porcentajePares.toFixed(2)}%</p>
    <p>Porcentaje de números impares: ${porcentajeImpares.toFixed(2)}%</p>
    <p>Porcentaje de números mayores a 1000: ${porcentajeMayores1000.toFixed(2)}%</p>
    <p>Mayor valor: ${mayorValor}</p>
    <p>Menor valor: ${menorValor}</p>
    <p>Porcentaje del número mínimo respecto al máximo: ${porcentajeNumeroMinimo.toFixed(2)}%</p>
    <p>Promedio de todos los números: ${promedioNumeros.toFixed(2)}</p>
  `;

  // Limpiar el input después de calcular.
  inputNumeros.value = '';

  // Mostrar los números ingresados por el usuario.
  const numerosIngresadosDiv = document.getElementById('numerosIngresados');
  numerosIngresadosDiv.textContent = `Números ingresados: ${arregloNumeros.join(', ')}`;
}

function limpiarResultados() {
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = '';

  const numerosIngresadosDiv = document.getElementById('numerosIngresados');
  numerosIngresadosDiv.textContent = '';
}