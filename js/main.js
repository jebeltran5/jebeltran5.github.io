document.addEventListener("DOMContentLoaded", () => {
  //cargar menu
  fetch('menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menu-container').innerHTML = data;
    })
    .catch(error => console.error('Error cargando menú:', error));

  //cargar footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error cargando pie de página:', error));

  // Manejar descarga de archivos
  const botonDescarga = document.getElementById('btn-descargar');
  if (botonDescarga) {
    botonDescarga.addEventListener('click', () => {
      const archivos = [
        {
          url: 'documentos/Hoja_de_vida_Jelver_Beltran.docx_2025_1.pdf'
        },
        {
         // url: 'documentos/Hoja_de_vida_Jelver_Beltran.docx_2025_2.docx'
        }
      ];

      archivos.forEach((archivo, index) => {
        setTimeout(() => {
          const enlace = document.createElement('a');
          enlace.href = archivo.url;
          // Extraer el nombre automáticamente desde la URL
          enlace.download = archivo.url.split('/').pop();
          document.body.appendChild(enlace);
          

          console.log(`Iniciando descarga de: ${archivo.url}`);
          enlace.click();
          document.body.removeChild(enlace);
        }, index * 1000);

      });
    });
  }
});