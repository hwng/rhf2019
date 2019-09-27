/*eslint-env node*/

/*globals path */
const path = require('path');
var http = require('http'),
    fs = require('fs');


fs.readFile(path.resolve(__dirname, '../', 'app/index.html'), function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(/* @callback */ function(request, response) {  
        response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
        
    }).listen(8081);
    console.log('App listening on port 8081');
});

