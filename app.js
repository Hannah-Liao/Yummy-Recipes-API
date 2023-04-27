import * as dotenv from 'dotenv';
dotenv.config()

import express from "express";
const app = express();
const PORT = 3001 || process.env.PORT;

//database
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI);

import router from './routes/routes.js';

//middleware
app.use(express.json());

app.use("/recipes", router);

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})