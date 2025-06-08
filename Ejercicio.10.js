
function verificarMayoresDeEdad(edades) {
  return edades.every(edad => edad >= 18);
}

const edades = [12, 21,40, 16];
const resultado = verificarMayoresDeEdad(edades);
console.log( resultado); 
