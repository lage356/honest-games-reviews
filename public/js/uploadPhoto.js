const form = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append('file', fileInput.files[0]);

      try {
        const response = await fetch('/api/avatars/upload', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        const imageUrl = data.imageUrl;

        // Display the uploaded image
        imagePreview.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 100%;">`;
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    });