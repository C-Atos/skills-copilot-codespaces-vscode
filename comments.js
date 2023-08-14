// Create web server
// Run: node comments.js
// Access: http://localhost:3000

var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var ejs = require('ejs');

// Create web server
var server = http.createServer(function(req, res){
    // Read file
    fs.readFile('comments.ejs', 'utf-8', function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.write('Not Found!');
            return res.end();
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(ejs.render(data));
        return res.end();
    });
}).listen(3000);

console.log('Server running at http://localhost:3000');