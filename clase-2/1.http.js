const http = require('node:http')
const fs = require('node:fs')

const desirePort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; Charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenidos sean todos a la sala del tiempo donde un dia real alli es una año de entrenamiento</h1>')
  } else if (req.url === '/fotito') {
    fs.readFile('./fotito.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Internal server error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<ol><li>Metodo de contacto 1</li><li>Metodo de contacto 2 </li> <li>Metodo de contacto 3 </li> <li>Metodo de contacto 4 </li></ol>')
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desirePort, () => {
  console.log(`server listening on port http://localhost:${desirePort}`)
})
