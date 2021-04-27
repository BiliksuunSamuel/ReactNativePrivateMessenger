const mongoose=require('mongoose')

////
const host=process.env.host;
const database=process.env.database;
const port=process.env.hostport;

////
const connectionurl=`mongodb://${host}:${port}/${database}`


//
const connection=mongoose.connect(connectionurl)