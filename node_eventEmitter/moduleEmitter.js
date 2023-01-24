function Emitter() {
    this.events = {};
  }
  
  Emitter.prototype.on = function (type, listener) { // this.events[type] huong toi la
    //1 array.
    this.events[type] = this.events[type] || []; // lệnh rút gọn chỉ cần
    //array [] rỖNG HOẶC this.events[type] tồn tại trả lại true
    //thì this.events[type] sẽ được gán cho giá trị đó. 
    //=> đây chính là BƯỚC QUY ĐỊNH TRẠNG THÁI CỦA VALUE CỦA
    // KEY events 

    //  || operator ở đây ám chỉ nếu có tồn tại 1 giá trị ở tỏng
    //array [selector] thì nó sẽ được gán luôn là biến gốc, tý nữa chỉ việc push 
    //vào sau đó. còn nếu ban đầu k có sẵn thì sễ là mảng rỗng. Sẽ là lựa chọn thứ 2.


    this.events[type].push(listener); //listener ở đây là 1 biến
    // được gán bởi 1 function. Tức là 1 thành phần của array là 1 hàm.

  };
  
  Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
      this.events[type].forEach(function(listener) {
         listener();
      });
    }
  };
  
  module.exports = Emitter;
