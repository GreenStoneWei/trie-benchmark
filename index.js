const http = require('http')
const app = require('./app')
const server = http.createServer(app)

async function main() {
  const PORT = process.env.PORT || 3000
  console.log(`app is running on port ${PORT}`)

  process.on('uncaughtException', (error) => {
    console.error('Caught exception: ', error)
  })
  process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection at: Promise ', error)
  })
  server.listen(PORT)
}

main()
