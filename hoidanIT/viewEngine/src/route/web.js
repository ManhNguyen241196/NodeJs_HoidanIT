import express from "express";
import homeController from "../controller/homeController";
import multer from "multer";
import path from "path";
var appRoot = require('app-root-path');
let router = express.Router()

const storage = multer.diskStorage({  // Câu lệnh này để định hướng lưu trữ dữ liệu vào bộ 
    //nhớ đĩa. nếu k có lệnh này chỉ điểm tới vị trí luu trong bộ nhớ đĩa thì nó sẽ chỉ lưuuw
    //mặc định dữ liệu vào bộ nhớ thường.
    destination: function(req, file, cb) {
        cb(null, appRoot+ '/hoidanIT/viewEngine/src/public/img'); // với điều kiện không có lỗi thì trỏ trực tiếp 
        //định nghĩa tới thư mục uploads 
    },
  
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });  // lwuuw và đổi tên file mới để đảm bảo không bị trùng. 
  


  //phan dinh nghia cho phan upload file
    const imageFilter = function(req, file, cb) {

     console.log(typeof file.originalname)
     // Accept images only
     if (!file.originalname.match("JPG")) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
     }
    cb(null, true);
   };

  let upload = multer({
    storage: storage,  // chính là biến storage được định nghia vị trí 
    // và phương thức điền tên trước đó đã định nghĩa. 
    fileFilter: imageFilter
  })




const initWebRoute = (app)=>{
    router.get("/", homeController.getHomepage); 
    router.get("/detail/user/:userId", homeController.getDetailPage); 
    router.post("/create-new-user", homeController.createNewUser); // cac vi tri duong link phai
    //o trong dau "" chứ các dấu '' hay `` cũng k dk. Ở đây sử dụng Post để đẩy dữ liệu từ client lên server.
    router.post("/delete-user", homeController.deleteUsers);
    router.post("/update-user", homeController.postUpdateUser);
    router.get("/edit-user/:userId", homeController.getEditPage)
    router.get("/sanpham", (req,res)=>{
        res.send('<h1> day la page san pham </h1>');
    })

    router.get("/upLoadFile", homeController.getUpLoadPage); 
    router.post("/upload-profile-pic", upload.single('profile_pic'),homeController.handleUploadFile);
    router.post("/upload-multiple-images", upload.array('multiple_images',3) ,homeController.handleUploadMultipleFile);

    
    return app.use('/', router)
}

export default initWebRoute;   // export ra 1 function 