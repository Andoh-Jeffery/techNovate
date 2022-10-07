const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Signup form')
})
// CREATE ACCOUT
router.post('/login/creat', async (req, res) => {
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

  module.exports=router;