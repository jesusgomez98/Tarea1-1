
function combinarListasSinRepetir(lista1, lista2) {
  return Array.from(new Set([...lista1, ...lista2]));
}

const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandia'];

const resultado = combinarListasSinRepetir(lista1, lista2);
console.log( resultado);
