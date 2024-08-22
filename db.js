const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/hotels`);


    

const db = mongoose.connection;

db.on('connnected', () => {
    console.log('connected to mongodb');
});
db.on('error', (err)=>{
    console.log('Mongodb connection err', err)
});
db.on('disconnected', ()=>{
    console.log('Mongodb disconnected');
})

module.exports = db;