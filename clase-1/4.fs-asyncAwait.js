const { readFile } = require('node:fs/promises');
(async () => {
  console.log('leyendo el primer archivo...');
  const text = await readFile('./archivo.txt', 'utf8')
  console.log('este es el primero', text)

  console.log('Haciendo cosas mientras lee los archivos...');

  console.log('leyendo el segundo archivo...');
  const secondText = await readFile('./archivo2.txt', 'utf8')
  console.log('este es el segundo', secondText)
})();