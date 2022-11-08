const express=require('express');
const { connectdb } = require('./config/db.config');
const { AuthRoutes } = require('./routes/auth.routes');
const { TodoRoutes } = require('./routes/todos.routes');
const cors=require('cors');
const PORT=process.env.PORT;

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
console.log('Home page')
res.send('welcome to home');
})
app.use('/todos',TodoRoutes);
app.use('/auth',AuthRoutes)


app.listen(PORT,async()=>{
    try{
         await connectdb;
        console.log('connected to database');

    }catch(e){
        console.log('error on connecting to database')
        console.log(e);
    }
    console.log('listening on port')
})