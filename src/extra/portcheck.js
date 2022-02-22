const http=require('http');

const isPortFree =(port) =>
  new Promise(resolve => {
    const server = require('http')
      .createServer()
      .listen(port, () => {
        server.close()
        resolve(true)
      })
      .on('error', () => {
        resolve(false)
      })
  })

module.exports=isPortFree