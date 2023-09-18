require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.use('/', require("./routes"))

app.get('/', (req, res) => {
  res.status(200).send("Hello World, This is Node JS from app.js!");
});
app.listen(PORT, () => { console.log(`Web Server is listening at port: ${PORT}`) });
