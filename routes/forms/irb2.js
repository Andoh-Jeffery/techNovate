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
    res.render('irb2')
})
router.post('/submit',(req,res)=>{
    const {q1,q2,q3,q4,q5,q6,q7,q8,q9,q10}= req.body;
    if(q1,q2,q3,q4,q5,q6,q7,q8){
        const sql=("INSERT INTO irb_2 VALUES (?,?,?,?,?,?,?,?,?,?)" )
        connection.query(sql,[q1,q2,q3,q4,q5,q6,q7,q8,q9,10],(data,error)=>{
            if(error){console.log(error)}
            else{console.log('data entered successfully');
            // res.send('data entered...');
        }
        })
        res.end();
    }
})
module.exports=router;