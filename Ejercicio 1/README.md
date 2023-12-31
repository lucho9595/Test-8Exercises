# Calculadora de Multiplicación

Esta es una calculadora de multiplicación desarrollada en JavaScript que permite multiplicar dos números sin usar el operador `*`. Los números son ingresados por el usuario a través de campos de entrada en un formulario HTML y el resultado se muestra en el documento.

## Cómo usar la calculadora

1. Clona este repositorio en tu máquina local o descarga los archivos como un archivo ZIP.
 - git clone https://github.com/lucho9595/Test-8Exercises
 - Ingresa a la carpeta del proyecto (Seria Ejercicio1)

2. Abre el archivo `index.html` en tu navegador. Esto mostrará la interfaz de la calculadora.

3. Ingresa dos números en los campos de entrada "Número 1" y "Número 2".

4. Haz clic en el botón "Calcular" para realizar la multiplicación sin usar `*`. El resultado se mostrará en el área debajo del formulario, en un `<h2>` con el id "resultado".

5. Si alguno de los campos de entrada contiene un valor no numérico o está vacío, se mostrará un mensaje de error en lugar del resultado de la multiplicación.

## Lógica de la multiplicación

La lógica para realizar la multiplicación sin usar el operador `*` se encuentra en el archivo `app.js`. La función `multiplicacionSinMultiplicar` toma dos números como entrada y realiza la multiplicación utilizando un bucle `for` para sumar el multiplicando `x` tantas veces como indique el multiplicador `y`. Se tienen en cuenta los casos donde uno o ambos números son negativos.

## Archivos del proyecto

- `index.html`: Contiene la interfaz de la calculadora y enlaza con el archivo `app.js`.
- `app.js`: Contiene la lógica para realizar la multiplicación y capturar los números ingresados por el usuario.

## Tecnologías utilizadas

- HTML
- JavaScript
- Bootstrap
## Autor

Este proyecto fue desarrollado por [Luciano Coronel](https://www.linkedin.com/in/luciano-coronel-90503bb8/).