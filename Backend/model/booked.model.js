import mongoose from "mongoose ";

const Bookedschema = new mongoose.schema({
         servicetaker :{
            type:mongoose.schema.Types.ObjectId,
            required:true,
            ref:"User"
         },
         freelancer:{
            type:mongoose.schema.Types.ObjectId,
            ref:"User"
         },
         Service:{
            type:mongoose.schema.Types.ObjectId,
            ref:"Service",
         }
})
const Booked =new mongoose.model("Booked",Bookedschema);

export default Booked ;
