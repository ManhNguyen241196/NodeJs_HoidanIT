var express = require("express"); // khai bao de lay module express
var app  = express();

app.get('/',function (req,res) {
    res.send('<h1> this is express res </h1> ')
})
var server = app.listen(8000,function(){  // function phia sau là để thực hiện sau khi lắng nghr
    //thành công cổng port 8000. 
    console.log('server is running at:' + server.address().port) 
})