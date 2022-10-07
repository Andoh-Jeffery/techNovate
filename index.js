const express = require("express");
const path = require("path");
const bcrypt = require('bcryptjs');
const sql=require('./db');
const sqlQuery = require('./dbServices')
const methodOverride = require('method-override');
<<<<<<< HEAD
=======
const login=require('./routes/login');
const signup=require('./routes/signup');
const irb1=require('./routes/forms/irb1')
const irb2=require('./routes/forms/irb2')
>>>>>>> 1aca1b05dd81c7f132e2ca08c0fe6c4dc314b93f

const port = process.env.PORT || 4000;
const app = express();

sql.connect;

// MIDDLLEWARES
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./styles")));
app.use(methodOverride('_method'));
<<<<<<< HEAD
=======
// app.use(sql)
app.use('/login',login);
app.use('/signup',signup);
app.use('/irb1',irb1);
app.use('/irb2',irb2);
>>>>>>> 1aca1b05dd81c7f132e2ca08c0fe6c4dc314b93f

// GET REQUESTS
app.get('/',(req,res)=>{
  // sqlQuery.creatAdmin_Table();
  // sqlQuery.creatStu_Table();
  // sqlQuery.creatSup_Table();
  // sqlQuery.creatHeadteacher_Table();
  // sqlQuery.creatMentor_Table();
  // sqlQuery.creatIRB_1_Table();
  // sqlQuery.creatIRB_2_Table();
  // sqlQuery.creatIRB_3_Table();
  // sqlQuery.creatIRB_4_Table();
  // sqlQuery.creatIRB_5_Table();
  // sqlQuery.creatIRB_6_Table();
  sqlQuery.creatIRB_7_Table();
})
// app.get('/irb1',(req,res)=>{
//   res.render('index');
// })
// CREATE ACCOUT
<<<<<<< HEAD
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
=======
// app.post('/login/creat', async (req, res) => {
//   const { email, password } = req.body;
//   const sql = ("INSERT INTO login VALUES (?,?)");
//   const hashpwd = await bcrypt.hash(password, 12);
//   connection.query(sql, [email, hashpwd], (err, result) => {
//     if (!err) {
//       console.log('acc created successfully');
//       res.send('acc created successfully');
//     } console.log(err);
//   })
// })
// // LOGIN
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   if (email && password) {
//     const sql = ('SELECT password FROM login WHERE username= ?');
//     connection.query(sql, email, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const pass_hash = result[0]["password"];
//         const verified = bcrypt.compareSync(password, pass_hash);
//         if (verified) {
//           console.log('yes');
//           res.end();
//         } else {
//           console.log('no');
//           res.end();
//         }
//       }
//       })
//       }
    
// });


>>>>>>> 1aca1b05dd81c7f132e2ca08c0fe6c4dc314b93f
app.listen(port, () => console.log(`app listening on pot ${port}`));