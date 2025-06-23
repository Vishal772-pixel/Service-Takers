import asyncHandler from "express-async-handler";
import User from "../model/user.model.js";
import generateToken from '../utils/generateToken.js';

import bcrypt from "bcryptjs";


//Regsiter => post /register
 
export const register = (async (req, res) => {
  const { name, email, password,role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    role,
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: "Signup successful",
      token: generateToken(user._id),
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});










//Login => post api/auth/login


export const login = (async(req,res)=>{
    const {email, password} =req.body;
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            success:true,
            message:"Login successful",
            token:generateToken(user._id),
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                
            },
        })
    }else{
        res.status(401);
        throw new Error("Invalid email and password");
    }


});