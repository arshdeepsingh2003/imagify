import express from 'express'
import {registerUser,loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'


const userRouter=express.Router()


userRouter.post('/register',registerUser)// Route to handle user registration (POST request)
userRouter.post('/login',loginUser)// Route to handle user login (POST request)
userRouter.post('/credits',userAuth,userCredits)// Route to handle user login (POST request)

export default userRouter


// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login