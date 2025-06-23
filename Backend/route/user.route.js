import express from "express";
import mongoose from "mongoose";

import {register,login } from "../controller/auth.controller.js";

const userRoutes = express.Router();
// Register Route
userRoutes.post("/register", register);


// Userrouter.get("/signup", async (req, res) => {
//     console.log("Received signup request:");
// });

// Login Route
userRoutes.post("/login", login);

export default userRoutes;