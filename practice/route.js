function route(pathname, handler,res) {
  console.log('当前访问的路径是' + pathname)
  if(typeof handler[pathname] === 'function') {
    handler[pathname](res)
  } else {
    console.log('没有你请求的资源，请确认后再次请求')
  }
}
exports.route = route