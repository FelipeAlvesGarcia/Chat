const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config();

let singleton;

async function connect (){
    if(singleton) return singleton; 

    console.log(process.env.DB_HOST)
    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB_DATABASE);
    return singleton;
}

let findAll = async (collection) =>{
    const db = await connect();
    return await db.collection(collection).find().toArray();
}

module.exports = {findAll};