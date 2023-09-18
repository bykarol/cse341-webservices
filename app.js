require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const router = express.Router();
const lesson1Controllers = require("./controllers/lesson1")


app.get('/', lesson1Controllers.rootPage);

//testing router
router.get('/home', lesson1Controllers.homePage);
router.get('/profile', lesson1Controllers.profilePage);
router.get('/login', lesson1Controllers.loginPage);
router.get('/logout', lesson1Controllers.logoutPage);

app.use(router);
app.listen(PORT, () => { console.log(`Web Server is listening at port: ${PORT}`) });
