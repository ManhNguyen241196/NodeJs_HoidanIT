//phan này để build 1 server

const express = require("express") // biến express yêu cầu từ thư viện express
require('dotenv').config()
import initWebRoute from './route/web'
import initAPIRounte from './route/API';
import configViewEngine from './configs/Viewengine';
import connection from './configs/connectDB';
const app = express()   //app sẽ là biến đại diện cho việc chạy thư viện express 

const port = process.env.PORT ||3000
console.log(process.env.PORT)

var morgan = require('morgan')
app.use(morgan('combined'))


//2 dòng này chính là phần phụ trợ, hỗ trợ cho việc gửi data từ phía client
//lên server và có thể xử lí chúng dễ dàng.
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//define view web
configViewEngine(app);

//init web route
initWebRoute(app);

//init API rounte
initAPIRounte(app);

//handle 404 not found
app.use((req,res)=> {
  return res.render("404.ejs")
})


app.listen(port,()=>{
  console.log('server is running....')
})
console.log(__dirname);
