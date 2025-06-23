// Create service 
// Get service 

import express from "express";
import mongoose from "mongoose";
import Service from "../model/services.model.js";

const createService = async(req,res)=> {
    try {
        const{title,description,category,price,deliveryTime,features} =req.body; 
        if(!title||!description||!category||!price||!deliveryTime||!features){
            return res.status(400).json({message:"All fields are required"});
        }
        const newService = new Service({
            title,
            description,
            category,
            price,
            deliveryTime,
            name,
            features
        })
        await newService.save();
        res.status(201).json({message:"Service created successfully",service:newService});

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error", error:error.message});
        

    }


}

const getService= async(req,res)=>{
    try{
        const services = await Service.find();
        res.status(200).json({message:"Services fetched successfully",services});

    } catch(error){

        console.log(error);
        res.status(500).json({message:"Internal server error",error:error.message});
    }
    }


export {createService,getService}