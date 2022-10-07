const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('login Form')
})
// LOGIN
router.post('/login', async (req, res) => {
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

  module.exports=router;