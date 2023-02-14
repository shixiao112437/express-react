const express = require('express')
const db = require('../model')

const router = express.Router()

// 注册用户

router.post('/user',(req,res) => {
    res.send('注册用户')
})


// 获取所有用户
router.get('/user',(req,res) => {
    db.query("select * from user",(err,result) => {
        if(err) return false
        res.send(result)
    })
   
})



// 获取指定用户
router.get('/user/:id?',(req,res) => {

    res.send('获取指定用户')
})


// 修改用户
router.put('/user/:id?',(req,res) => {
    res.send('修改用户')
})



// 删除用户
router.delete('/user/:id?',(req,res) => {
    res.send('删除用户')
})

module.exports = router