import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "../db/index.js";
import userRoutes from "../route/user.route.js";

dotenv.config(); // Load environment variables


const app = express();
connectDB();
app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Freelance marketplace");
});



// User routes
app.use("/api/user", userRoutes); // e.g., /api/user/register

// Run the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
