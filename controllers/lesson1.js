function rootPage(req, res) {
  res.status(200).send("Hello World, This is Node JS from app.js!");
}

function homePage(req, res) {
  res.send('Hello World, This is home router');
}

function profilePage(req, res) {
  res.status(200).send('Hello World, This is profile router');
}

function loginPage(req, res) {
  res.send('Hello World, This is login router');
}

function logoutPage(req, res) {
  res.send('Hello World, This is logout router');
}

module.exports = {
  rootPage,
  homePage,
  profilePage,
  loginPage,
  logoutPage
}