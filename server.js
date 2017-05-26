
// require is a built-in nodejs method, that includes a module
// that module can be:
// 1. part of core, in which case we do nothing. (HTTP is an example)
// 2. from the npm store, written by someone else. require will look inside of node_module
// 3. A module WE wrote, which requires a path
var http = require("http"); //nodejs method only

// console.log(http);
var server = http.createServer(function(request, response){
	// console.log(request);
	response.writeHead(200,{
		'content-type':'text/html'
	});
	response.write("<h1>Hello,visitor. This is YOUR node server</h1>");
	response.end();
});

// server is created above. It came from http object, the createServer method. 
// It includes a request and a response in the callback... but ALSO has a listen method.

server.listen(8000);
console.log("NodeJS is listening for connections on port 8000");