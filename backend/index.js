import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
const app = express();



app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('Your App is connected to MongoDB');
    app.get('/', (request, response) => {
        // console.log(request);
        return response.status(234).send('welcome To MERN Stack Tutorial');
    })
}).catch((err) => {
    console.log(err);
});