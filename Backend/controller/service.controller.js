// Create service 
// Get service 

import express from "express";
import mongoose from "mongoose";
import serviceSchema from "../model/services.model.js";

const createService = async(req,res)=> {
    try {
        const{title,description,category,price,deliveryTime,features} =req.body; 
        if(!title||!description||!category||!price||!deliveryTime||!features){
            return res.status(400).json({message:"All fields are required"});
        }
        const newService = new serviceSchema({
            title,
            description,
            category,
            price,
            deliveryTime,
            features
        })
        await newService.save();
        res.status(201).json({message:"Service created successfully",service:newService});

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
        

    }


}

const getServices= async(req,res)=>{
    try{
        const services = await serviceSchema.find();
        res.status(200).json({message:"Services fetched successfully",services});
        
    } catch(error){

        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
    }


