async function showImages() {
    const imageContainer = document.getElementById('image-container');
    const numberInput = document.getElementById('number-input');
    const number = parseInt(numberInput.value);
  
    // Limpiamos el contenedor antes de agregar nuevas imágenes
    imageContainer.innerHTML = '';
  
    // Validamos que el número esté en el rango permitido (1 a 15)
    if (isNaN(number) || number < 1 || number > 15) {
      alert('Por favor, ingresa un número válido entre 1 y 15.');
      return;
    }
  
    // Obtenemos imágenes de Unsplash usando la API
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?count=${number}&client_id=VK8CiCeET5v4EOIEYbrOSeY3vqzzg47JyVcEkZ3ONDs`);
      const data = await response.json();
  
      // Agrupamos las imágenes en grupos de a 4
      for (let i = 0; i < data.length; i += 5) {
        const row = document.createElement('div');
        row.classList.add('row', 'mt-4');
  
        for (let j = i; j < i + 5 && j < data.length; j++) {
          const image = document.createElement('img');
          image.src = data[j].urls.regular; // Utilizamos la URL de la imagen en tamaño regular
          image.classList.add('col-md-2', 'img-thumbnail', 'm-1');
          row.appendChild(image);
        }
  
        imageContainer.appendChild(row);
      }
  
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
      alert('Ha ocurrido un error al obtener las imágenes. Por favor, intenta nuevamente más tarde.');
    }
  }  