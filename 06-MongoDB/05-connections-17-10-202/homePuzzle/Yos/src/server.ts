import express from 'express';
import petsRouter from "./routes/petsRoutes";
import clientsRouter from "./routes/clientsRoutes";
import booksRouter from "./routes/booksRoutes";
import authorsRouter from "./routes/authorsRoutes";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;

const secretPath = path.resolve(__dirname, "C:/Users/ShorY/source/repos/Yoss_Full_Stack_Course_March_24/FullStack_March_2024/secret/mongodb.json");
const secret = JSON.parse(fs.readFileSync(secretPath, "utf-8"));

const mongodbUri = secret.mongodb.uri;

//connection to db
const mongoose = require('mongoose');
mongoose.connect(mongodbUri).then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});


app.use(express.json());


app.use(express.static('public'));

app.use('/pets',petsRouter)
app.use('/clients',clientsRouter)
app.use('/books',booksRouter)
app.use('/authors',authorsRouter)

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})