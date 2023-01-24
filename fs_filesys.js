var fs = require('fs');
// var http = require('http');

// http.createServer(function(req,res){
//     // fs.readFile('movie_index.html', function (err,data) {
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write("data")
//         res.end();  //ra tín hiệu cho biết đã kết thúc quá trình đọc dữ liệu 
//     // })
//     console.log('HTTP running...')
// }).listen(8000)


// console.log('manh')

// //read files
// const fs = require('fs');
// let fileName2 = 'movie_index.html'
// fs.readFile(fileName2,function (err,data) {
//     console.log(data)
// })


// fs.appendFile('mytext.txt','phan nay dk them vao lan nũa' ,function (err) {
//     if(err)throw err;
//     console.log('saved')
// })

// fs.open('mytext.txt', "w+", function(err,f){
//    if(err){
//     return console.error(err)
//    }
//    console.log (f, "va", "file opened!")
// })


// const dataString = "day laf data string dk them vao bang writeFile"
// fs.writeFile('WriteText2.txt', dataString,(err)=>{
//    console.error(err)
// } )

fs.unlink('WriteText2.txt', function (err) {
    if(err) throw err;
    console.log('dax xoa')
})