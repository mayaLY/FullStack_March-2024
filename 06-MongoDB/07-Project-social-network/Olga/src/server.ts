import express from 'express';
import usersRouter from './routes/users/usersRoutes';
const app = express();
import cookieParser from 'cookie-parser';
const port = 3000;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://21apr:2bMhY0FflVbbFe89@cluster0.mgmmcit.mongodb.net/instagram').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});


app.use(express.json());
app.use(cookieParser());


app.use(express.static('public'));

app.use('/users',usersRouter)


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})