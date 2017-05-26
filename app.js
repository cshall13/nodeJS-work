// Include the http module

var http = require("http");
// Include the fs module. fs = file system. Part of the core!! Yay!
var fs = require("fs");

var server = http.createServer((req,res)=>{
	console.log("Someone connected to the server!!");
	console.log(req.url);

	res.writeHead(200,{'content-type': 'text/html'});
	if(req.url == '/'){
		var theHomePageHTML = fs.readFileSync('homePage.html');
		res.end(theHomePageHTML);
	}else if(req.url == '/countdown'){
		res.writeHead(200,{'content-type': 'text/html'});
		var theHomePageHTML = fs.readFileSync('countdown.html');
		res.end(theHomePageHTML);
	}else if(req.url == '/scripts.js'){
		res.writeHead(200,{'content-type': 'application/javascript'});
		var theHomePageHTML = fs.readFileSync('./scripts.js');
		res.end(theHomePageHTML);
	}else if(req.url == '/styles.css'){
		res.writeHead(200,{'content-type': 'text/css'});
		var theHomePageHTML = fs.readFileSync('./styles.css');
		res.end(theHomePageHTML);
	}else{
		res.writeHead(404,{'content-type': 'text/html'});
		res.end("<h1>404 Error</h1>");
	}
});

// Tell the server we created above, to listen to port 8000.
// Whenever someone makes a http request to port 8000, our 
// callback (with req, and res) will fire.
var port = 8001;
server.listen(port);
console.log("Server is listening for HTTP traffic on port" + port + '...');

