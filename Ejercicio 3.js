
function promedioPonderado(notas) {
  let suma = 0;
  for (const nota of notas) {
    suma += nota.valor * nota.peso;
  }
  return suma;
}

const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];

const resultado3 = promedioPonderado(notas);
console.log('Ejercicio 3:', resultado3); 
