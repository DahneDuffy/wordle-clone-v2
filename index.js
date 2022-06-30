const PORT = process.env.PORT || 7000;
const express =require('express')
const fs = require('fs')
require('dotenv').config()
const path = require('path')

const app = express();

app.use(express.static(__dirname + '/public'))



app.get('/',(req,res)=>{
  res.sendFile(path.join((__dirname +'/public/index.html')))
})



app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

