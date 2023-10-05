function sum (a, b) {
  return a + b
}
// Common JS export function
// module.exports = sum; <= forma de exportar en la que se puede cambiar el nombre al momento de importar
module.exports = { // forma de exportar en la que no se puede cambiar el nombre al momento de importar
  sum
}
