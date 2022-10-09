const express=require('express');
const router=express.Router();
const mysql=require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'technovate'
  });
   
  connection.connect((err)=>{
    if(err){throw err}
    else{console.log("db connected...")}
  });
router.get('/',(req,res)=>{
    res.render('irb4');
})

router.post('/submit',(req,res)=>{
    const {q1,q2}=req.body;
    
        const sql=("INSERT INTO irb_4 VALUES (?,?)");
        connection.query(sql,[q1,q2],(data,error)=>{
            if(error){
                console.log(error);
                console.log(req.body);
            }else{
                console.log('inserted...');
                console.log(req.body);
            }
        })
    
})
  module.exports=router;