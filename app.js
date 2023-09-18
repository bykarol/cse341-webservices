require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const router = express.Router();


app.get('/', (req, res) => {
  res.status(200).send("Hello World, This is Node JS from app.js!");
});

//testing router
router.get('/home', (req, res) => {
  res.send('Hello World, This is home router');
});

router.get('/profile', (req, res) => {
  res.status(200).send('Hello World, This is profile router');
});

router.get('/login', (req, res) => {
  res.send('Hello World, This is login router');
});

router.get('/logout', (req, res) => {
  res.send('Hello World, This is logout router');
});

app.use(router);
app.listen(PORT, () => { console.log(`Web Server is listening at port: ${PORT}`) });
