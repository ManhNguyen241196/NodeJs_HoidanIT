import connection from "../configs/connectDB";

let newVariable; 

connection.query( 'SELECT * FROM `users` ',function (err, results, fields) {
    console.log(results)
     newVariable = results;
})
let getAllUsers = (req,res)=>{
  return res.status(200).json({
    message: "ok",
    data: newVariable
  })
}

let createUser = (req,res) => {
    let {firstName,lastName,email,address} = req.body;

    if(!firstName || !lastName||!email||!address){
        return res.status(404).json({
            message: "thiếu dữ liệu API",    
         })
    }  
    connection.query(`INSERT INTO users(firstName,lastName,email,address)  VALUES (?,?,?,?)`,[firstName,lastName,email,address])

   return res.status(200).json({
    message: "ok post API",
    data: req.body
   })
}

let updateUser =(req,res)=>{
    let {firstName,lastName,email,address, idNum} = req.body;  // bước này sẽ lấy tất cả giá trị của các input trong form dk hồi đáp lại và

    if(!firstName || !lastName||!email||!address||!idNum){
        return res.status(404).json({
            message: "thiếu dữ liệu API",    
         })
    }  
     
   connection.query('UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?',[firstName, lastName, email, address, idNum])

    return res.status(200).json({
        message: "ok update API", 
       })
}

let deleteUser = (req,res)=>{
  let userID = req.body.userId

  if(!userID){
    return res.status(404).json({
        message: "thiếu iD user to delete API",    
     })
}  
  connection.query(`DELETE FROM users WHERE id = ? `,[userID])

    return res.status(200).json({
        message: "ok delete API",
       })
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}