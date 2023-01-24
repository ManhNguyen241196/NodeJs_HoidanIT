const express = require('express'); // Require module express vào project
const app = express(); // Tạo một app mới
const port = 8080; // Định nghĩa cổng để chạy ứng dụng NodeJS của bạn trên server

// app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
// app.set('view engine', 'pug'); // Sử dụng pug làm view engine

var users = [
	{name: "User1", email: "user1@gmail.com"}, 
	{name: "User2", email: "user2@gmail.com"}
];

app.get('/', function(req, res){
	res.send("<h2>This is my first app</h2>");
})

app.get('/users', function(req, res){
	res.render('users/index',{
		users: users
	});
})

app.get('/users/search', (req,res) => {
	console.log(req.query);
})

app.listen(port, function(){
    console.log('Your app running on port '+ port);
})
console.log ('hello')