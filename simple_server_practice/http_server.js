const http=require('http');

const server = http.createServer(async(req,res) => {
    
    // console.log(req.headers.host)
    // console.log(req.headers.userAgent)
    console.log(req.rawHeaders)
    console.log(req.url)
    res.writeHead(200, { "content-type": "application/json" });
    res.write("hello world")
    await setTimeout(()=>{
        server.close(()=>{
            console.log("server closed")
        })
    },3000)
    // process.exit()
})

server.listen(3000,()=>{
    console.log('server started')
})

// setTimeout(()=>{
//     server.close(()=>{
//         console.log("server closed")
//     })
// },3000)