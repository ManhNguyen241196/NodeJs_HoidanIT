import connection from "../configs/connectDB";
import multer from 'multer';
import path from 'path';
import { appendFile } from "fs";

console.clear()

let getHomepage = (req,res) =>{
    let data = [];
 
    // trên này sẽ chứa các logic các xử lí dữ liệu và cuối cùng
    // mới return ra view.
    // simple query
 connection.query(
    'SELECT * FROM `users` ',
    function(err, results, fields) {
      
      results.map(function (row) {
          data.push(
            {
                id: row.id,
                firstName: row.firstName,
                lastName: row.lastName,
                email : row.email,
                address: row.address
            }
          )
      })
      console.log("in ra mysql")
      
      console.log(JSON.stringify(data)); // results contains rows returned by server
      return res.render('index.ejs', {dataUsers: data})
    }
  );
}

let  createNewUser = (req,res) => {
  let {firstName,lastName,email,address} = req.body
  connection.query(`INSERT INTO users(firstName,lastName,email,address)  VALUES (?,?,?,?)`,[firstName,lastName,email,address])
  console.log('check req:', req.body )
  return res.redirect('/');
}

let deleteUsers = (req,res) => {
  connection.query(`DELETE FROM users WHERE id = ? `,[req.body.userId])
  return res.redirect('/');
}

let getEditPage = (req,res) => {
  let id =req.params.userId;
  connection.query(`SELECT * FROM users WHERE id = ?`,[id],function (err, result, fields) {
    console.log(result[0])

    return res.render('update.ejs',{dataUserEdit: result[0]})
  })
}

let postUpdateUser = (req,res) => {
   let {firstName,lastName,email,address, idNum} = req.body;  // bước này sẽ lấy tất cả giá trị của các input trong form dk hồi đáp lại và
   // gán cho các biến tương ứng
  connection.query('UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?',[firstName, lastName, email, address, idNum])
  console.log(req.body)
  return res.redirect('/')
}

let getDetailPage = (req,res) => {
  console.log(req.params)
  console.log(req.query)
  let id =req.params.userId;
  connection.query(`SELECT * FROM users WHERE id = ?`,[id],function (err, result, fields) {
    if (err) throw err;
    console.log("in ra tu detail page",result);
    return res.send(`<p>in ra: ${JSON.stringify(result)}</p>`)
  } )
}

let getUpLoadPage = (req,res) => {
 return res.render("upLoadFile.ejs")

}

//gán quá trình upload file bằng multer vào biến. 
const upload = multer().single('profile_pic');  
const uploadMultiple = multer().array('multiple_images',3)


let handleUploadFile = (req,res) => {  // biến req trong fuction này chính là từ input từ form dk submit gửi lên
  // console.log(req.file)
  upload(req, res, function(err) { //viec upload len cos loi thì sẽ được hiển thị ở đây.
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any
    // if (req.fileValidationError) {
    //     return res.send(req.fileValidationError);
    // }
     if (!req.file) {
        return res.send('Please select an image to upload');
     }   
    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="/img/${req.file.filename}" width="500"><hr /><a href="/upLoadFile">Upload another image</a>`);
  });
}

let handleUploadMultipleFile = (req,res) =>{
  console.log(req.files)
  console.log(req.query)

 let myReq = req.files;
  let result = "cac file upload len là: "; 
  uploadMultiple(req, res, function(err) { 
    if (!req.files) {
      return res.send('Please select an image to upload');
    }  
  })  // quá trình này là 1 hàm và lấy biến req chính là từ quá trình multer().array()
  // để lấy cơ sở chạy tiếp hàm function bên trong nó trước đó nữa
  
  for (let index = 0; index < myReq.length; index++) {
    result = result + `<img src="/img/${myReq[index].filename} "width="500">`;
  }
  // result = result + `<img src="/img/${myReq[0].filename}" width="500">`
  res.send(result);
}


module.exports={
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUsers,
    getEditPage,
    postUpdateUser,

    //tao giao dien up load file (tao view de upload file))
    getUpLoadPage,
    handleUploadFile, //Function de upload file len
    handleUploadMultipleFile
}