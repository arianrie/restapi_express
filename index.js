import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json())
app.use(userRoute)
app.listen(5000, ()=>{ console.log('Server up and running...')});

