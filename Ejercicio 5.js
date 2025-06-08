
function eliminarDuplicados(arr, propiedad) {
  const resultado = [];

  for (const item of arr) {
    const yaExiste = resultado.some(obj => obj[propiedad] === item[propiedad]);
    if (!yaExiste) {
      resultado.push(item);
    }
  }

  return resultado;
}

const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];

const resultado5 = eliminarDuplicados(elementos, 'id');
console.log('Ejercicio 5 :', resultado5);
