import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
 name:{
    type :String,
    required:true,

 },
 email:{
    type:String,
    required: true,
    unique:true,
 },
 password:{
    type:String,
    required:true,
 },
 role:{
   type:String,
   enum:["servicetaker","freelancer"],
   default:"servicetaker",
 }

 }
 
);
 const User= mongoose.model("User",userSchema)
 export default User;