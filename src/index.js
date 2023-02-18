const http = require('http');
const fs = require('fs');

const indexHTML = fs.readFileSync('../public/index.html','utf-8');


const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName==='/'|| pathName ==='/home'){
        res.end(indexHTML);
    }else{
        res.writeHead(404);
        res.end("<h1>Not Found</h1>")
    }

})

server.listen(3000,'localhost',()=>{
    console.log("Start server in port 3000");
})