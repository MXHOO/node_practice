const server = require('./server')
const route = require('./router')
const requestHandler = require('./requestHandlers')

let handler = {}
handler['/'] = requestHandler.start
handler['/start'] = requestHandler.start
handler['/upload'] = requestHandler.upload
server.start(route.route, handler)
