const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/USER_MANAGEMENT_SYSTEM';

const connectDB =()=>{
    try{
        const con = mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MOngoDB Connected  `);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB;