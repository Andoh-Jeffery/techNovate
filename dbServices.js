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
    const sql=('CREATE TABLE Admin(User_type VARCHAR(50), ID INT(50) AUTO_INCREMENT PRIMARY KEY, Username VARCHAR(50), E_mail VARCHAR(50) UNIQUE, Password VARCHAR(50) UNIQUE);')
    connection.query(sql,(err,result)=>{
        if(err){throw err}
        else{console.log('table created...')}
    })
  }

// Creating the Student_TABLE
const creatStu_Table=()=>{
  const sql=('CREATE TABLE Student(User_type VARCHAR(50), ID INT(50) AUTO_INCERMENT PRIMARY KEY, Name VACHAR(50), Index_number INT(10) UNIQUE, Contact INT(10), E_mail VARCHAR(50) UNIQUE, Password VARCHAR(50) UNIQUE, Programme VARCHAR(100), Internship_location VARCHAR(100), School_name VARCHAR(100));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

// Creating the Supervisor_TABLE
const creatSup_Table=()=>{
  const sql=('CREATE TABLE Supervisor(User_type VARCHAR(50), ID INT(50) AUTO_INCERMENT PRIMARY KEY, Name VACHAR(50), Contact INT(10), E_mail VARCHAR(50) UNIQUE, Password VARCHAR(50) UNIQUE, Assignment_code VARCHAR(10));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

//Creating the Headtercher_TABLE
const creatHeadteacher_Table=()=>{
  const sql=('CREATE TABEL Headteacher(User_type VARCHAR(50), ID INT(50) AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(50), Contact INT(10), E_mail VARCHAR(50) UNIQUE, Password VARCHAR(50) UNIQUE);')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

 
 module.exports=
 {  creatAdmin_Table,
    creatStu_Table,
    creatSup_Table,
    creatHeadteacher_Table,
  
  



}
