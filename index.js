const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mysql = require("mysql");
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
app.get("/", (req, res) => {
  let sql = "SELECT * FROM student";
  connection.query(sql,(err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("data retrieved...");
    }
    res.render('index',{data:result});
  });
 
});
const update=(req,res,next)=>{
  let details = { firstname: "troy", lastname: "lynx" };
  let sql = "INSERT INTO student SET ?";
  let query = connection.query(sql, details, (err, result) => {
    if (err) {
      throw err;
    } else {
      
      console.log(result);
    }
    
  });
}
app.get("/add", (req, res) => {
  res.send('add',);
});

app.get('/update',(req,res)=>{
  const id=req.query.id;
  let sql='SELECT * FROM student WHERE id=?';
  connection.query(sql,id,(err,result)=>{
    if(err){throw err}
    else{
      // console.log(result);
      res.render('update',{data:result})
    }
  })
 
  // res.render('update')
})
app.put('/update/:id',(req,res)=>{
  const {firstname,lastname}=req.body;
  console.log(req.body);
  const id=req.params.id;
  console.log(id);
  let sql='UPDATE student SET ? WHERE id=?';
  connection.query(sql,[req.body,id],(err,result)=>{
    if(err){
      throw err
    }else{
      
      
      console.log(result);
      res.send('data updated')}
  })
})
app.get('/delete/:id',(req,res)=>{
  const id= req.params.id;
  let sql='DELETE FROM student WHERE id=?';
  connection.query(sql,id,(err)=>{
    if(!err){
      res.send("data deleted...")
    }else{throw err}
  })
})

app.listen(port, () => console.log(`app listening on pot ${port}`));
