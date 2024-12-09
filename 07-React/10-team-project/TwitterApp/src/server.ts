import express from "express";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes';
import recipeRoutes from './routes/recipeRoutes';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

console.log("Server starting...")
app.use(bodyParser.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Serve React's built files
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));


//get secret file
const dbUri = process.env.MONGO_DB_CONNECTION!;
console.log("Mongo URI:", process.env.MONGO_DB_CONNECTION);

//connection to db
mongoose.connect(dbUri).then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});



app.use('/api/auth', authRoutes);
app.use('/api/recipe', recipeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

