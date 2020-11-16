var http = require("http");
var url = require("url");

let postData = ''
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding('utf8')
    request.addListener('data', (data) => {
      postData += data
      console.log('接收到数据' + data)
    })

    request.addListener('end', ()=> {
      route(handle, pathname, response, postData);
    })
    
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;