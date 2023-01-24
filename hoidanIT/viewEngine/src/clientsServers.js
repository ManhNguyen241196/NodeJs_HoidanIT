const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('run request....');
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`<h3> hello world</h3>
           <h2> day la phan dk in ra tu res.write </h2>
    `);
    res.end();
})

server.listen(3000, function () {
   console.log('sever running on port 3000')    
})