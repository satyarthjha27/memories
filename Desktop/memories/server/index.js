import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://satyarth:satyjha@cluster0.eupg2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//const CONNECTION_URL = 'mongodb://localhost:27017/memoriesdb';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
    const path =require("path");
    app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
  }
  

//mongoose.set('useFindAndModify', false);
