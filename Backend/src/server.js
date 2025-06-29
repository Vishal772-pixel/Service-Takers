import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "../db/index.js";
import userRoutes from "../route/user.route.js";
import serviceRoutes from "../route/services.route.js";

dotenv.config();


const app = express();
connectDB();
app.use(cors({
    origin:"http://localhost:5173"
}));


app.use(express.json());
// Re intialize the routes ..u are using below 


app.use("/", userRoutes);
app.use("/",serviceRoutes);


// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Freelance marketplace");
});




//Service routes


// Run the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



