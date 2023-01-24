var fs = require('fs')

// fs.writeFile('myTextCb.txt',"da tao ra file moi",function (err) {
//     if (err) throw err;
//     console.log("created new file!")
// })

fs.readFile('myTextCb.txt', function (err,data) {
    if(err) throw err;
    console.log(data.toString());
})
console.log('bất đồng bộ')

var data = fs.readFileSync('myTextCb.txt')
console.log(data.toString());
console.log('day la đồng bộ')
 