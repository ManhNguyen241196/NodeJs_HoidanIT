var http = require ("http") // yêu cầu gọi module http để tạo giao thức http. Http là module có sẵn của 
//nodejs.
http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/plain'})
 response.end('hello world') // tao xong server sẽ chạy 
 //đoạn string trong ngoặc chueyern về dạng thập lục phân và
 //gửi lên server và chuyển về dưới dạng content-type tùy chọn
 //nếu có có định dạng cú pháp html và content-type là html thì
 // nó sẽ trả về 1 web dk viết băng đoạn html đó.

}).listen(8000);


    console.log("Server is running at port 3000...");
