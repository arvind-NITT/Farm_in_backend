const Connet_to_mongoose= require('./connect_to_db');
const express = require('express');
const auth = require('./routes/auth');
const cors = require('cors');
const tools = require('./routes/tools');

const port = process.env.PORT;
const dblink=process.env.DATABASE_LINK;
const mongoose= require('mongoose');
// const port = process.env.PORT;
////

const app= express();
app.use(express.json());
app.use(cors());
app.use('/api/auth',auth);
app.use('/api/tools',tools);
// app.use('content-type','Json');

app.get('/',(req,res)=>{
    res.send("Hey Welcome ");
});
 
// Connet_to_mongoose();
// app.listen(port,()=>{
//     console.log("Starting.....")
// })

const func= async()=>{
    await mongoose.connect(dblink);
     console.log("connecting");
     app.listen(port,()=>{
        console.log("Starting.....")
    })
 }

 func();