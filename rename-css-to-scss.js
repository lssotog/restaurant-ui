const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/app');

function renameFiles(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('No se pudo leer el directorio:', err);
      return;
    }

    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        // Llama recursivamente a la función si es un directorio
        renameFiles(fullPath);
      } else if (file.isFile() && file.name.endsWith('.css')) {
        // Renombra el archivo si su extensión es .css
        const newPath = path.join(dir, file.name.replace(/\.css$/, '.scss'));
        fs.rename(fullPath, newPath, (renameErr) => {
          if (renameErr) {
            console.error("Error al renombrar ${fullPath}:", renameErr);
          } else {
            console.log("Renombrado: ${fullPath} -> ${newPath}");
          }
        });
      }
    }
  });
}

console.log('Iniciando el renombramiento de archivos .css a .scss...');
renameFiles(directoryPath);