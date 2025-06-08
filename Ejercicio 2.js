
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: "Jesus" });
      } else if (id === 2) {
        resolve({ id: 2, nombre: "Gaby" });
      } else {
        reject(new Error("Usuario no encontrado"));
      }
    }, 1000); 
  });
}
obtenerUsuario(1)
  .then(usuario1 => {
    console.log(`Usuario 1 cargado: ${usuario1.nombre}`);
    return obtenerUsuario(2);
  })
  .then(usuario2 => {
    console.log(`Usuario 2 cargado: ${usuario2.nombre}`);
    console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
  })
  .catch(error => {
    console.error("Error al cargar los usuarios:", error);
  });
    