require('dotenv').config();
const { MongoClient } = require('mongodb');

async function dbConnection() {
  const uri = `mongodb+srv://cse341Test:${process.env.MONGODB_PASSWORD}@cluster0.htw1x71.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);

  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = dbConnection;