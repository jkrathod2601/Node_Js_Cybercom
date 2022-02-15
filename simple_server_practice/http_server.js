const http=require('http');

const server = http.createServer((req,res) => {
    console.log(req.headers.host)
    console.log(req.headers.userAgent)
    res.write("hello world")
    res.end()
})

server.listen(3000,()=>{
    console.log('server started')
})