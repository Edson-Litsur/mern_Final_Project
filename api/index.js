import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

// MONGODB CONNECTION

mongoose  
.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to mongoDB!');
})
.catch((err) => {
    console.log(err); 
}); 


const app = express();

// Allowing JSON
app.use(express.json());
app.use(cookieParser());
app.use('/api/listing', listingRouter);

app.listen(3000, () => {
   console.log('Server is run on port 3000!!');
    } 
)


// API ROUTE

app.use('/api/user', userRouter );
app.use('/api/auth', authRouter); 

// Midllerware

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode, 
        message,

    });
    });
   