let http=require('http');

let server=http.createServer((req,res)=>{
    res.write('<h1>This is http Node.Js server</h1>');
    res.end();
})

server.listen(8765)