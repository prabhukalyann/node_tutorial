 const express = require('express');
 const app = express();
 const db = require('./db')
 
app.get("/", (req, res)=>{// any information send to the browser.
 res.send('hello');
}); 

app.listen(3000, ()=>{
    console.log('start')
});