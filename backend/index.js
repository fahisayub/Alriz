const express=require('express');
const { connectdb } = require('./config/db.config');
const cors=require('cors');
const { HomeRoutes } = require('./routes/home.routes');
const { MasjidRoutes } = require('./routes/masjid.routes');
const { UserRoutes } = require('./routes/user.routes');
const PORT=process.env.PORT;

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
console.log('Home page')
res.send('welcome to home');
})
app.use('/masjid',MasjidRoutes);
app.use('/home',HomeRoutes);
app.use('/user',UserRoutes)


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