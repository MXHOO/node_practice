const http = require('http')
const url = require('url')

function start(route, handler) {
  function onRequest(req, res) {
    const pathname = url.parse(req.url).pathname
    
    route(pathname, handler, res)
  }

  http.createServer(onRequest).listen(8888)
}

exports.start = start