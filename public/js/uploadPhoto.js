window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/api/avatars/list");
    const data = await response.json();
    if (data.images && data.images.length > 0) {
      const lastImage = data.images[data.images.length - 1];
      document.getElementById("uploadedImage").src = lastImage.url;
      document.getElementById("uploadedImage").style.display = "block";
    } else {
      console.error("No se pudo obtener la lista de imágenes subidas");
    }
  } catch (error) {
    console.error("Error al obtener la lista de imágenes subidas:", error);
  }
});

function seleccionarImagen() {
  document.getElementById("imageInput").click();
}

function mostrarVistaPrevia() {
  const fileInput = document.getElementById("imageInput").files[0];
  if (fileInput) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("uploadedImage").src = e.target.result;
      document.getElementById("uploadedImage").style.display = "block";
    };
    reader.readAsDataURL(fileInput);
  }
}

async function subirImagen() {
  const fileInput = document.getElementById("imageInput").files[0];
  if (fileInput) {
    const formData = new FormData();
    formData.append("file", fileInput);

    try {
      const response = await fetch("/api/avatars/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.imageUrl;
        document.getElementById("uploadedImage").src = imageUrl;
        document.getElementById("uploadedImage").style.display = "block";

        var successModal = new bootstrap.Modal(
          document.getElementById("successModal"),
          { keyboard: false }
        );
        successModal.show();
      } else {
        console.error("Error uploading profile picture:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  }
}
