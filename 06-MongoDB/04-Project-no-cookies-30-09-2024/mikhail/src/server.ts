import express from 'express';
import clientRouter from './router/clientRoutes'
import { ClientModel } from './model/clientmodel';

const app = express()
const port = 3000

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://HotNuggets:ieoBkUDlsayOqaoT@cluster0.z25jn.mongodb.net/').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

app.use(express.static('public'));

app.use('/client',clientRouter)


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})