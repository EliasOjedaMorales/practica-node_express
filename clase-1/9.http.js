const http = require('node:http')
const { findAvaliablePort } = require('./10.free-port')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvaliablePort(desirePort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
