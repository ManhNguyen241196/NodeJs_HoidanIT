var emitter = require('events') // gọi module events 

// // đoạn code mẫu
// var em  = emitter.EventEmitter //định nghĩa riêng 1 biến 
// // sử dụng EventEmitter.
// function LoopProcessor(num) {
//     var e =new em();

//     setTimeout(function(){
//       for (let i = 1; i < num; i++) {
//         e.emit('Before Process', "dua vao gia tri i")

//         console.log('Processing number:  ' , i )

//         e.emit('After Process',i)

//       }
//     },2000)
    
//     return e;
// }
// var lp = LoopProcessor(3);
//  lp.on('Before Process', function(data){
//     console.log("Bat dau process" , data)
//  })

//  lp.on('After Process', function(data){
//     console.log("ket thuc process" , data)
//  })

//đoạn code mới:
var callEmitter = emitter.EventEmitter; // trỏ cụ thể tới phẩn EventEmitter 
//của cụm thư viện events.

const newEmitter = new callEmitter; // định nghĩa 1 biến mới có sử dụng module EventEmitter trên.

//khai bao event vaf suw kien xay ra khi event dk tro toi
newEmitter.on('Before Process', function (data) {
    console.log("Bat dau process" , data)
})
newEmitter.on('After Process', function (data) {
    console.log("Ket thuc process" , data)
})

function loop(num) {
    for (let i = 1; i < num; i++){
        newEmitter.emit('Before Process' , i)
        console.log("index process: ", i);
        newEmitter.emit('After Process' , i)
    }
}

loop(3)

console.log(emitter.EventEmitter)
