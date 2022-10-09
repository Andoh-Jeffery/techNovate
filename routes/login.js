const express=require('express');
const router=express.Router();
// const sql=require('../db');
// sql.connect;
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


router.get('/',(req,res)=>{
    res.send('login')
})
// LOGIN
router.post('/login', async (req, res) => {
  const {email, password } = req.body;
  if (email && password) {
    const sql = ('SELECT password FROM admin WHERE email= ?');
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

  module.exports=router;