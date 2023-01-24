import express from "express";

const configViewEngine = (app)=>{
   app.use(express.static('hoidanIT/viewEngine/src/public'))
   app.set("view engine","ejs");
   app.set("views", "hoidanIT/viewEngine/src/views");
}
export default configViewEngine // phải đưa về sử dụng import và export vì đây
//là caschd dể biến file này thành 1 module và có thể đẩy output ra dk.
