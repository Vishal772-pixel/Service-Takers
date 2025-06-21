import mongoose from "mongoose";
//  title: '',
//     description: '',
//     category: '',
//     price: '',
//     deliveryTime: '',
//     features:
const serviceSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    
    },
    description:{
        type:String,
        required:true,
    
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:"Number",
        required:true,
    },
    deliveryTime:{
        type:"Number",
        required:true,

    },
    features:{
        type:String ,
        required:true,
    }

})
const Service= mongoose.model("Service",serviceSchema)
export default Service ;