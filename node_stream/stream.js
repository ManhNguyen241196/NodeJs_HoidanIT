var fs = require("fs");

var data ='bien nay dk load truoc vì các sự kiện trong node js mac dinh là k dong bo';
var readStream =fs.createReadStream('input.txt');

readStream.on('data', function (chuck) {
    data = data + chuck
    fs.writeFile('input2.txt', data, function (err) {
        if(err) throw err;
        console.log('tao moi file thanh cong');
    })
    // console.log(data)
    console.log('event datat dk gan method')
})
// readStream.on('end', function () {
//     console.log('event end dk gan  method')
// })
readStream.on('end', ()=>{
    console.log("end xay ra")
});
readStream.on('finish',()=>{
    console.log ('finish xay ra')
});

