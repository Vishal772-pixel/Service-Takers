import mongoose from 'mongoose';
import express from 'express';

import {createService,getService} from '../controller/service.controller.js';

const serviceRoutes = express.Router();

// Create Service Route
serviceRoutes.post('/addservices', createService);


// Get Services Route
serviceRoutes.get('getservices',getServices);
