
function modificarPersona(persona, nuevoNombre) {
  return { ...persona, nombre: nuevoNombre, edad: persona.edad + 1 };
}

const persona = { nombre: 'Jesus', edad: 30 };
const nuevaPersona = modificarPersona(persona, 'Antonio');
console.log('Ejercicio 4:', nuevaPersona); 
