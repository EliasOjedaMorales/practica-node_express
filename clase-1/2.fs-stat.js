const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.size, // tamaño en bytes
  stats.isFile(),// si es un fichero
  stats.isDirectory(),//si es un directorio 
  stats.isSymbolicLink()//si es un enlace simvbolico 

)