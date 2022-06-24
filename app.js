const http = require('http');
const fs = require('fs');
const path = require('path');

let filepath = path.join(__dirname, "/public", "index.html");
const file = fs.readFileSync(filepath);
const server = http.createServer((request,response)=>{
    if(request.url == '/'){
        response.end(file);
    } else if(request.url == '/download'){
        response.end(file);
    } else {
        response.end('bad requsest')
    }
}).listen(3000)