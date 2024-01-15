
const http=require("http");
const port=8000;

function kushalHandel (req,res){
    res.writeHead(200,{'content-type':'text-html'});
    res.end("<h1>Hello World</h1>");
}

const server= http.createServer(kushalHandel);

server.listen(port,(err)=>{
    if(err){
        console.log("error");
        return;
    }
    console.log("server is running in port no.",port);
})