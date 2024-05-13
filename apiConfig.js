/* eslint-disable no-unused-vars */
/* eslint-env node */
const express=require('express');
const cors =require('cors');
// eslint-disable-next-line no-undef
const router = require('./src/EndPoints/apiEndpoints.js');


const app = express();

const port=3600;


app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use('/api',router);

app.use((err, req, res, next) => {
  // console.log(res);
    res.status(500).send("Uh oh! An unexpected error occured.")
  })
  
  app.listen(port,()=>{ console.log(`server is running on port ${port}`)});
