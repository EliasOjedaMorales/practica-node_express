const fs = require('node:fs')

// const text = fs.readFileSync('./archivo.txt', 'utf8');

// console.log(text)

console.log('leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf8', (error, text) => {
  console.log(text)
})
console.log('Haciendo cosas miesntras lee los archivos...')

console.log('leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf8', (error, text) => {
  console.log(text)
})
