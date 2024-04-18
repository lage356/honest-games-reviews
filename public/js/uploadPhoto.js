window.addEventListener("DOMContentLoaded", async () => {
    try {
      // Obtener la lista de imágenes subidas
      const response = await fetch("/api/avatar");
      const data = await response.json();

      // Verificar si se recibió correctamente la lista de imágenes
      if (data.images && data.images.length > 0) {
        // Obtener la última imagen de la lista
        const lastImage = data.images[data.images.length - 1];
        // Mostrar la última imagen subida
        document.getElementById("uploadedImage").src = lastImage.url;
        document.getElementById("uploadedImage").style.display = "block";
      } else {
        console.error("No se pudo obtener la lista de imágenes subidas");
      }
    } catch (error) {
      console.error(
        "Error al obtener la lista de imágenes subidas:",
        error
      );
    }
  });

  function seleccionarImagen() {
    // Simulamos un clic en el input de archivo cuando se hace clic en la imagen
    document.getElementById('imageInput').click();
  }

  function mostrarVistaPrevia() {
    const fileInput = document.getElementById('imageInput').files[0];
    if (fileInput) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('uploadedImage').src = e.target.result;
        document.getElementById('uploadedImage').style.display = 'block';
      }
      reader.readAsDataURL(fileInput);
    }
  }

  function subirImagen() {
    const fileInput = document.getElementById('imageInput').files[0];
    if (fileInput) {
      const formData = new FormData();
      formData.append('image', fileInput);

      fetch('/avatar', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('uploadedImage').src = data.imageUrl;
        document.getElementById('uploadedImage').style.display = 'block';
        // Mostrar el modal de éxito después de cargar la imagen
        var successModal = new bootstrap.Modal(document.getElementById('successModal'), {keyboard: false});
        successModal.show();
      })
      .catch(error => {
        console.error('Error al subir la imagen:', error);
      });
    }
  }