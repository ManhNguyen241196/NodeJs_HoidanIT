// var events =require('events');
var Emitter = require("./moduleEmitter");
var emitter = new Emitter();  
//lúc này emitter được định nghĩa là 1 object có dạng
// emitter={
    //   events: {
        // tinhieu1 : [hoi dap tin hieu 1,hoi dap tin hieu 2,...],

    // }
// }
// console.log(emitter)

emitter.on("denvang", function den_active() {
  console.log("den vang dang bật")
});

emitter.on("denvang", function dunglai() {
  console.log("Dừng lại trước vạch giới hạn");
});

var tinhieu = [3, 2, 1];//1: đèn đỏ, 2: đèn vàng, 3: đèn xanh
for (var th of tinhieu) {
  if (th == 2) {
    emitter.emit("denvang"); // cau lenh này trong module 
    //đã tro trực tiếp vào từng function và chạy chúng.
  }
}
// console.log(emitter.events.denvang)