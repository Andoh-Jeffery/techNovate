const mysql = require('mysql');

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

  // Creating the Admin_TABLE
 const creatAdmin_Table=()=>{
    const sql=('CREATE TABLE admin(username VARCHAR(255), password VARCHAR(255));')
    connection.query(sql,(err,result)=>{
        if(err){throw err}
        else{console.log('table created...')}
    })
  }
  // Altering the Admin_TABLE
  const alterAdmin_Table=()=>{
    const sql=('ALTER TABLE admin ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;')
    connection.query(sql,(err,result)=>{
        if(err){throw err}
        else{console.log('table ALTERED...')}
    })
  }

  // Creating the Student_TABLE
 const creatStu_Table=()=>{
  const sql=('CREATE TABLE student(username VARCHAR(255), password VARCHAR(255));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}
// Altering the Student_TABLE
const alterStu_Table=()=>{
  const sql=('ALTER TABLE student ADD COLUMN index_num INT(10) UNIQUE;')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table ALTERED...')}
  })
}

 
 module.exports=
 {   creatAdmin_Table,
  alterAdmin_Table,
  creatStu_Table,
  alterStu_Table,



}
