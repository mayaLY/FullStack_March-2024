import express from 'express';
import petsRouter from "./routes/petsRoutes";
const app = express()
const port = 3000;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://naamal:16546nly@cluster0.y2gab.mongodb.net/fs-march24').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

const Parrot = mongoose.model('Parrot', { name: String, species:String }); //create a model/ schema

const kuki = new Parrot({ name: 'kuki', species:'cocktail' }); //instance of the model
kuki.save().then(() => console.log('kuki kuki kuki!')).catch((err:any)=>console.log(err)); //save the instance to the db






app.use(express.json());


app.use(express.static('public'));

app.use('/pets',petsRouter)

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})