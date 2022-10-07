const express = require("express");
const path = require("path");
const bcrypt = require('bcryptjs');
const mysql = require("mysql");
const sqlQuery = require('./dbServices')
const methodOverride = require('method-override');
const login=require('./routes/login');
const signup=require('./routes/signup');

const port = process.env.PORT || 4000;
const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "technovate",
});
connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("db connected...");
  }
});
// MIDDLLEWARES
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./styles")));
app.use(methodOverride('_method'));
app.use('/login',login);
app.use('/signup',signup);

// GET REQUESTS
app.get('/', (req, res) => {
  // sqlQuery.creatTable();
  res.send("dasboard")


})


app.listen(port, () => console.log(`app listening on pot ${port}`));