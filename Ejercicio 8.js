
function filtrarDisponibles(productos, categoria) {
  return productos.filter(p => p.categoria === categoria && p.stock > 0);
}

const productos = [
  { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
  { nombre: 'Pantalon', categoria: 'ropa', stock: 0 },
  { nombre: 'Computadora', categoria: 'electrónica', stock: 5 }
];

const resultado = filtrarDisponibles(productos, 'ropa');
console.log( resultado);