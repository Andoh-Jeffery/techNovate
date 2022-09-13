const mysql=require('mysql');

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
  
 const creatTable=()=>{
    const sql=('CREATE TABLE student;')
    connection.query(sql,(err,result)=>{
        if(err){throw err}
        else{console.log('table created...')}
    })
 }
 module.exports[
    creatTable
 ]