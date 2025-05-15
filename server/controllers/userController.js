import userModel from "../models/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name||!email||!password){
            return res.json({sucess:false,message:'Missing details'})
            
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        
        // Create a new user object with the hashed password
        const userData={
            name,
            email,
            password:hashedPassword
        }

        //save new user to db
        const newUser=new userModel(userData)
        const user =await newUser.save()


        // Create a JWT token for the newly registered user
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
        // Send a success response with the token and user info
        res.json({sucess:true,token,user:{name:user.name}})
    }
    catch(error){
        console.log(error)
        res.json({sucess:false,message:error.message})

    }
}