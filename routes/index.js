const router = require('express').Router();
const lesson1Controllers = require("../controllers/lesson1")

//testing router
router.get('/home', lesson1Controllers.homePage);
router.get('/profile', lesson1Controllers.profilePage);
router.get('/login', lesson1Controllers.loginPage);
router.get('/logout', lesson1Controllers.logoutPage);

module.exports = router;