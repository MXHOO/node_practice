const server = require('./server')
const route = require('./route')
const handler = require('./handler')

routeHandler = {}
routeHandler['/'] = handler.first
routeHandler['/second'] = handler.second
server.start(route.route, routeHandler)