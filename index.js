const express = require("express");
const path = require("path");
const bcrypt = require('bcryptjs');
const mysql = require("mysql");
const sqlQuery = require('./dbServices')
const methodOverride = require('method-override');

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

// GET REQUESTS
app.get('/',(req,res)=>{
  //sqlQuery.creatAdmin_Table();
  // sqlQuery.creatStu_Table();
  // sqlQuery.creatSup_Table();
  // sqlQuery.creatHeadteacher_Table();
  
})
// CREATE ACCOUT
app.post('/login/creat', async (req, res) => {
  const { email, password } = req.body;
  const sql = ("INSERT INTO login VALUES (?,?)");
  const hashpwd = await bcrypt.hash(password, 12);
  connection.query(sql, [email, hashpwd], (err, result) => {
    if (!err) {
      console.log('acc created successfully');
      res.send('acc created successfully');
    } console.log(err);
  })
})
// LOGIN
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const sql = ('SELECT password FROM login WHERE username= ?');
    connection.query(sql, email, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const pass_hash = result[0]["password"];
        const verified = bcrypt.compareSync(password, pass_hash);
        if (verified) {
          console.log('yes');
          res.end();
        } else {
          console.log('no');
          res.end();
        }

      }
    })

  }

})
app.listen(port, () => console.log(`app listening on pot ${port}`));