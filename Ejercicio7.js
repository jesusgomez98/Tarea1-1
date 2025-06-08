
function contarPalabras(palabras) {
  const conteo = {};
  for (const palabra of palabras) {
    conteo[palabra] = (conteo[palabra] || 0) + 1;
  }
  return conteo;
}

const palabras = ['Goku', 'Naruto', 'Goku', 'Luffy', 'Goku', 'Luffy'];
const resultado = contarPalabras(palabras);
console.log( resultado);
