function first(res) {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.write('first')
  res.end()
}

function second(res) {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.write('second')
  res.end()
}

exports.first = first
exports.second = second