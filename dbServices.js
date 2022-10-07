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
  const sql=('CREATE TABLE Student(User_type VARCHAR(50), ID INT(50) AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(50), Index_number INT(10) UNIQUE, Contact INT(10), E_mail VARCHAR(50) UNIQUE, Password VARCHAR(50) UNIQUE, Programme VARCHAR(100), Internship_location VARCHAR(100), School_name VARCHAR(100));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}
 
// Creating the Supervisor_TABLE
const creatSup_Table=()=>{
  const sql=('CREATE TABLE Supervisor(User_type VARCHAR(50), ID INT(50) AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(50), Contact INT(10), E_mail VARCHAR(50) UNIQUE, Password VARCHAR(50) UNIQUE, Assignment_code VARCHAR(10));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

//Creating the Headtercher_TABLE
const creatHeadteacher_Table=()=>{
  const sql=('CREATE TABLE Headteacher(User_type VARCHAR(50), ID INT(50) AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(50), Contact INT(10), E_mail VARCHAR(50) UNIQUE, Password VARCHAR(50) UNIQUE);')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

//Creating the Mentor_TABLE
const creatMentor_Table=()=>{
  const sql=('CREATE TABLE Mentor(User_type VARCHAR(50), ID INT(50) AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(50), Contact INT(10), E_mail VARCHAR(50) UNIQUE, Password VARCHAR(50) UNIQUE, Class VARCHAR(5), Subject VARCHAR(50), Topic VARCHAR(50));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

//Creating the IRB_TABLES
const creatIRB_1_Table=()=>{
  const sql=('CREATE TABLE IRB_1(Question_1 VARCHAR(150), Question_2 VARCHAR(150), Question_3 VARCHAR(150), Question_4 VARCHAR(150), Question_5 VARCHAR(150), Question_6 VARCHAR(150), Question_7 VARCHAR(150), Question_8 VARCHAR(150));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}


const creatIRB_2_Table=()=>{
  const sql=('CREATE TABLE IRB_2(Question_1 VARCHAR(150), Question_2 VARCHAR(150), Question_3a VARCHAR(150), Question_3b VARCHAR(150), Question_3c VARCHAR(150), Question_4a VARCHAR(150), Question_4b VARCHAR(150), Question_5a VARCHAR(150), Question_5b VARCHAR(150), Question_5c VARCHAR(150));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

const creatIRB_3_Table=()=>{
  const sql=('CREATE TABLE IRB_3(Question_1 VARCHAR(150), Question_2 VARCHAR(150), Question_3 VARCHAR(150), Question_4 VARCHAR(150), Question_5 VARCHAR(150), Question_6 VARCHAR(150), Question_7 VARCHAR(150), Question_8 VARCHAR(150));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}


const creatIRB_4_Table=()=>{
  const sql=('CREATE TABLE IRB_4(Question_1 VARCHAR(150), Question_2 VARCHAR(150), Question_3 VARCHAR(150), Question_4 VARCHAR(150), Question_5 VARCHAR(150), Question_6 VARCHAR(150), Question_7 VARCHAR(150), Question_8 VARCHAR(150));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

const creatIRB_5_Table=()=>{
  const sql=('CREATE TABLE IRB_5(Question_1 VARCHAR(150), Question_2 VARCHAR(150), Question_3 VARCHAR(150), Question_4 VARCHAR(150), Question_5 VARCHAR(150), Question_6 VARCHAR(150), Question_7 VARCHAR(150), Question_8 VARCHAR(150));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

const creatIRB_6_Table=()=>{
  const sql=('CREATE TABLE IRB_6(Question_1 VARCHAR(150), Question_2 VARCHAR(150), Question_3 VARCHAR(150), Question_4 VARCHAR(150), Question_5 VARCHAR(150), Question_6 VARCHAR(150), Question_7 VARCHAR(150), Question_8 VARCHAR(150));')
  connection.query(sql,(err,result)=>{
      if(err){throw err}
      else{console.log('table created...')}
  })
}

const creatIRB_7_Table=()=>{
  const sql=('CREATE TABLE IRB_7(Question_1 VARCHAR(150), Question_2 VARCHAR(150), Question_3 VARCHAR(150), Question_4 VARCHAR(150), Question_5 VARCHAR(150), Question_6 VARCHAR(150), Question_7 VARCHAR(150), Question_8 VARCHAR(150));')
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
    creatMentor_Table,
    creatIRB_1_Table,
    creatIRB_2_Table,
    creatIRB_3_Table,
    creatIRB_4_Table,
    creatIRB_5_Table,
    creatIRB_6_Table,
    creatIRB_7_Table
  }
