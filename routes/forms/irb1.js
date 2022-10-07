const express=require('express');
const router=express.Router;
const sql=require('db.js');
sql.connect;
router.get('/',(req,res)=>{
    res.send('IRB1')
})
router.post('/submit',(req,res)=>{
    const {date,Q1,Q2,Q3,Q4,Q5,Q6,Q7}= req.body;
    if(date,Q1,Q2,Q3,Q4,Q5,Q6,Q7){
        const sql=('INSERT INTO irb1 VALUES (?,?,?,?,?,?,?)' )
        
    }
})