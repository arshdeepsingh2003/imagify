import express from 'express'
import {registerUser,loginUser} from '../controllers/userController.js'


const userRouter=express.Router()


userRouter.post('/register',registerUser)// Route to handle user registration (POST request)
userRouter.post('/login',loginUser)// Route to handle user login (POST request)

export default userRouter


// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login