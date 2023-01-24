import express from "express";
import APIController from "../controller/APIcontroller";
let router =express.Router();

const initAPIRounte = (app) =>{
    router.get('/users', APIController.getAllUsers)
    router.post('/create-user', APIController.createUser) //method Post de post new data len API
    router.put('/update-user', APIController.updateUser)
    router.delete('/delete-user/:id', APIController.deleteUser)

    return app.use('/api/v1/', router)
    
}

export default initAPIRounte